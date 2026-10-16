"""Generate the site's raster brand assets from the Saudewiki mark.

Run from the project root:

    python scripts/generate-og.py

This writes `public/og-1200x630.png`, `public/logo-512.png`,
`public/apple-touch-icon.png` and `public/favicon.png`. They are committed as
static assets; nothing here runs during `astro build`.

The vector originals live elsewhere and stay the source of truth:
`public/favicon.svg` and `src/components/BrandMark.astro` both draw the same
filled disc with the pulse knocked out.
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
DISC_CX, DISC_CY, DISC_R = 24.0, 24.0, 21.0
DISC_PULSE_W = 3.4
# One heartbeat: flat lead-in, tall spike, deep trough, short rebound, flat out.
DISC_PULSE_PATH = [
    (3.0, 24.0),
    (16.0, 24.0),
    (20.5, 12.0),
    (25.0, 35.0),
    (28.5, 19.0),
    (31.0, 24.0),
    (38.0, 24.0),
]


def _scale(points, size, offset):
    k = size / MARK_SPACE
    ox, oy = offset
    return [(ox + x * k, oy + y * k) for x, y in points]


def draw_disc_mark(draw, offset, size, disc, pulse):
    """The filled disc with the pulse knocked out — the one and only mark."""
    k = size / MARK_SPACE
    cx, cy = offset[0] + DISC_CX * k, offset[1] + DISC_CY * k
    r = DISC_R * k
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=disc)
    width = max(1, round(DISC_PULSE_W * k))
    pts = _scale(DISC_PULSE_PATH, size, offset)
    draw.line(pts, fill=pulse, width=width, joint="curve")
    # Round the trailing cap; the lead-in butts against the disc edge.
    ex, ey = pts[-1]
    draw.ellipse([ex - width / 2, ey - width / 2, ex + width / 2, ey + width / 2], fill=pulse)


def make_og() -> None:
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    draw.rectangle([0, 0, W, 10], fill=ACCENT)

    mark, mark_x, mark_y = 64, 64, 88
    draw_disc_mark(draw, (mark_x, mark_y), mark, ACCENT, BG)
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
    draw_disc_mark(draw, (s * 0.10, s * 0.10), s * 0.80, ACCENT, SURFACE)
    path = OUT_DIR / "logo-512.png"
    img.save(path, "PNG", optimize=True)
    print(f"wrote {path} ({path.stat().st_size} bytes)")


def make_apple_touch_icon() -> None:
    """iOS ignores transparency, so the icon is a full-bleed surface tile."""
    s = 180
    img = Image.new("RGB", (s, s), SURFACE)
    draw = ImageDraw.Draw(img)
    draw_disc_mark(draw, (s * 0.10, s * 0.10), s * 0.80, ACCENT, SURFACE)
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
