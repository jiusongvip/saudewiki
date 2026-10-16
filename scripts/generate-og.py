"""Generate the site's raster brand assets from the Saudewiki mark.

Run from the project root:

    python scripts/generate-og.py

This writes `public/og-1200x630.png`, `public/logo-512.png`,
`public/apple-touch-icon.png` and `public/favicon.png`. They are committed as
static assets; nothing here runs during `astro build`.

The vector originals live elsewhere and stay the source of truth:
`public/favicon.svg` (disc variant, legible at 16px) and
`src/components/BrandMark.astro` (outlined ring, used in the header lockup).
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (251, 250, 247)
SURFACE = (255, 255, 255)
INK = (10, 10, 10)
MUTED = (91, 106, 102)
ACCENT = (11, 85, 71)
RULE = (229, 227, 220)

FONT_BOLD = "C:/Windows/Fonts/segoeuib.ttf"
FONT_REGULAR = "C:/Windows/Fonts/segoeui.ttf"

OUT_DIR = Path(__file__).resolve().parent.parent / "public"

# The mark is authored in a 48x48 space; every helper below maps from it.
MARK_SPACE = 48.0
RING_CX, RING_CY, RING_R, RING_W = 24.0, 24.0, 17.5, 4.6
PULSE_W = 4.6
PULSE_PATH = [
    (3.0, 24.0),
    (13.0, 24.0),
    (16.4, 14.4),
    (22.6, 33.6),
    (26.0, 24.0),
    (45.0, 24.0),
]
# The disc variant inverts the mark for small sizes: filled circle, white pulse.
DISC_R, DISC_PULSE_W = 21.0, 5.0
DISC_PULSE_PATH = [
    (6.0, 24.0),
    (14.0, 24.0),
    (17.2, 15.0),
    (23.2, 33.0),
    (26.4, 24.0),
    (42.0, 24.0),
]


def _scale(points, size, offset):
    k = size / MARK_SPACE
    ox, oy = offset
    return [(ox + x * k, oy + y * k) for x, y in points]


def draw_ring_mark(draw, offset, size, ring, pulse):
    """The outlined ring crossed by the pulse, as used in the header lockup."""
    k = size / MARK_SPACE
    cx, cy = offset[0] + RING_CX * k, offset[1] + RING_CY * k
    r = RING_R * k
    w = max(1, round(RING_W * k))
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=ring, width=w)
    width = max(1, round(PULSE_W * k))
    draw.line(_scale(PULSE_PATH, size, offset), fill=pulse, width=width, joint="curve")


def draw_disc_mark(draw, offset, size, disc, pulse):
    """The filled-disc variant, for favicon and app-icon sizes."""
    k = size / MARK_SPACE
    cx, cy = offset[0] + RING_CX * k, offset[1] + RING_CY * k
    r = DISC_R * k
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=disc)
    width = max(1, round(DISC_PULSE_W * k))
    draw.line(_scale(DISC_PULSE_PATH, size, offset), fill=pulse, width=width, joint="curve")


def make_og() -> None:
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    draw.rectangle([0, 0, W, 10], fill=ACCENT)

    mark, mark_x, mark_y = 64, 64, 88
    draw_ring_mark(draw, (mark_x, mark_y), mark, ACCENT, INK)
    draw.text((156, 98), "Saudewiki", font=ImageFont.truetype(FONT_BOLD, 40), fill=INK)

    headline = ImageFont.truetype(FONT_BOLD, 76)
    draw.text((72, 240), "Informação de saúde", font=headline, fill=INK)
    draw.text((72, 326), "para todos.", font=headline, fill=ACCENT)

    body = ImageFont.truetype(FONT_REGULAR, 32)
    draw.text((72, 452), "Entenda doenças, sintomas e formas de prevenção", font=body, fill=MUTED)
    draw.text((72, 496), "com conteúdo claro e fontes confiáveis.", font=body, fill=MUTED)

    draw.rectangle([72, 566, W - 72, 567], fill=RULE)
    draw.text((72, 588), "saudewiki.com", font=ImageFont.truetype(FONT_REGULAR, 26), fill=ACCENT)

    path = OUT_DIR / "og-1200x630.png"
    img.save(path, "PNG", optimize=True)
    print(f"wrote {path} ({path.stat().st_size} bytes)")


def make_logo_512() -> None:
    """Square logo for JSON-LD `Organization.logo` — Google asks for >= 112px."""
    s = 512
    img = Image.new("RGB", (s, s), SURFACE)
    draw = ImageDraw.Draw(img)
    draw_ring_mark(draw, (s * 0.10, s * 0.10), s * 0.80, ACCENT, INK)
    path = OUT_DIR / "logo-512.png"
    img.save(path, "PNG", optimize=True)
    print(f"wrote {path} ({path.stat().st_size} bytes)")


def make_apple_touch_icon() -> None:
    """iOS ignores transparency, so the icon is a full-bleed accent tile."""
    s = 180
    img = Image.new("RGB", (s, s), ACCENT)
    draw = ImageDraw.Draw(img)
    k = s / MARK_SPACE
    width = max(1, round(5.0 * k))
    draw.line(_scale(DISC_PULSE_PATH, s, (0, 0)), fill=SURFACE, width=width, joint="curve")
    path = OUT_DIR / "apple-touch-icon.png"
    img.save(path, "PNG", optimize=True)
    print(f"wrote {path} ({path.stat().st_size} bytes)")


def make_favicon_png() -> None:
    """PNG fallback for the SVG favicon."""
    s = 64
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    draw_disc_mark(draw, (0, 0), s, ACCENT, SURFACE)
    path = OUT_DIR / "favicon.png"
    img.save(path, "PNG", optimize=True)
    print(f"wrote {path} ({path.stat().st_size} bytes)")


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    make_og()
    make_logo_512()
    make_apple_touch_icon()
    make_favicon_png()


if __name__ == "__main__":
    main()
