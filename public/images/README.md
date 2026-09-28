# INZOZI PARK — Photography folder

Real venue photographs belong in **this folder**.

The slot resolves in this order:
1. a real photo here (`public/images/<slot>`),
2. otherwise an AI-generated concept visual in `concept/`
   (labelled “Concept visual” on the site),
3. otherwise a branded placeholder.

A real photo always wins — just add it and rebuild.

## How to publish a real photo

1. Find the slot you want to fill in `scripts/image-slots.mjs`
   (each entry lists a `file` path, e.g. `venue/hall.jpg`).
2. Copy your photograph into the matching folder here, with the exact
   same file name. `.jpg`, `.jpeg`, `.png` and `.webp` are supported —
   e.g. `public/images/venue/hall.png` works too.
3. Run `npm run images` (or rebuild the site). The placeholder is
   replaced automatically everywhere that slot is used.

## Recommended photos (priority order)

| Slot | Suggested photograph |
| --- | --- |
| `hero/home.jpg` | Wide, atmospheric shot of the venue at golden hour |
| `weddings/ceremony.jpg` | A decorated wedding ceremony or reception |
| `venue/hall.jpg` | The main event hall set up for an event |
| `venue/garden.jpg` | The garden and grounds |
| `venue/rooftop.jpg` | The rooftop bar with the Gahanga hills behind |
| `services/kids.jpg` | Children enjoying the kids park |
| `services/catering.jpg` | A beautifully presented catering spread |

**Tips**

- Landscape photos of at least 1600 px wide look best for heroes.
- Keep file sizes reasonable (compress to ~200–400 KB per photo).
- Only publish photographs you have the rights to use.
