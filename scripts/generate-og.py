"""Generate the Open Graph image referenced by BaseLayout (`/og-1200x630.png`).

Run from the project root:

    python scripts/generate-og.py

The image is committed as a static asset; it is not regenerated during build.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (251, 250, 247)
SURFACE = (255, 255, 255)
INK = (20, 32, 29)
MUTED = (91, 106, 102)
ACCENT = (14, 122, 99)
RULE = (229, 227, 220)

FONT_BOLD = "C:/Windows/Fonts/segoeuib.ttf"
FONT_REGULAR = "C:/Windows/Fonts/segoeui.ttf"

OUT = Path(__file__).resolve().parent.parent / "public" / "og-1200x630.png"


def main() -> None:
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    draw.rectangle([0, 0, W, 10], fill=ACCENT)

    mark_x, mark_y, mark = 72, 88, 64
    draw.rounded_rectangle([mark_x, mark_y, mark_x + mark, mark_y + mark], radius=16, fill=ACCENT)
    draw.rectangle([mark_x + 29, mark_y + 15, mark_x + 35, mark_y + 49], fill=SURFACE)
    draw.rectangle([mark_x + 15, mark_y + 29, mark_x + 49, mark_y + 35], fill=SURFACE)

    draw.text((156, 98), "Saudewiki", font=ImageFont.truetype(FONT_BOLD, 40), fill=INK)

    headline = ImageFont.truetype(FONT_BOLD, 76)
    draw.text((72, 240), "Informação de saúde", font=headline, fill=INK)
    draw.text((72, 326), "para todos.", font=headline, fill=ACCENT)

    body = ImageFont.truetype(FONT_REGULAR, 32)
    draw.text((72, 452), "Entenda doenças, sintomas e formas de prevenção", font=body, fill=MUTED)
    draw.text((72, 496), "com conteúdo claro e fontes confiáveis.", font=body, fill=MUTED)

    draw.rectangle([72, 566, W - 72, 567], fill=RULE)
    draw.text((72, 588), "saudewiki.com", font=ImageFont.truetype(FONT_REGULAR, 26), fill=ACCENT)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
