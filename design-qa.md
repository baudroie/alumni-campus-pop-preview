# Native rebuild QA — 2026-10-22

final result: blocked

Source visual: ../alumni-campus-pop/public/assets/master-desktop.png and master-mobile.png
Implementation: index.html, style.css, main.js
Implementation screenshot: unavailable — browser control tools are not exposed in this session.

## Implemented fixes
- Removed all rasterized section/header/footer/CTA assets and hidden-text overlays.
- Implemented all six sections and every heading/body/button in native HTML/CSS.
- Removed portrait alpha holes; face interior alpha=255, RGB source difference=0.
- Kept photography/illustrations as individual assets; hero orange background is CSS.

## Static evidence
- Missing image references: 0; missing internal anchors: 0; duplicate IDs: 0; h1: 1.
- Master image/hotspot/text-mode references: 0.
- Font files local, CSS responsive breakpoint and reduced-motion rules included.

## Outstanding gate
Fonts/typography, responsive spacing, visual tokens, image quality at rendered sizes, copy wrapping, primary interactions and console must still be checked in a connected browser. No screenshot-based pass or complete visual fidelity is claimed.

## 2026-10-22 editorial and decoration update
- Removed visible source captions and preparation notes throughout.
- Replaced the quotation panel with editorial third-person copy based on the official interview (https://www.baudroie.jp/recruit/interview/interview01/). No newly invented words are attributed as a direct quotation.
- Restored yellow hand-drawn-style accents under headings and orange CTA marks seen in the master; implemented using CSS.
- Added a restrained dot pattern and outline rings to the CTA backdrop.
- Replaced the pending consultation dialog text with working links to the three existing role pages.
- Source-image review and source-code comparison performed. Native text, section order, portrait, three photographs, three supporting illustrations and numbered timeline retained.
- Remaining difference: source hero portrait was generated; production intentionally uses the official photograph. Original 01/02 caption layout retained.
- Browser-rendered comparison is still blocked: browser tool absent. Fonts, spacing, image framing and breakpoints cannot be declared visually passed.

## 2026-10-22 background and timeline refinement
- Inspected both supplied screenshots: profile/timeline rail offset and overlapping 04 digits confirmed.
- Both desktop rails now share a 40% grid track; mobile rails share a 5px inset and 2px border.
- Added CSS stationery backgrounds, visible hero note border/tape/shadow, and decorated message card.
- Added six inline SVG career icons; removed the requested career disclaimer.
- Replaced the slanted sans-serif career note with locally served Yomogi (OFL license included, character subset).
- Increased section-number spacing to prevent the 04 overlap.
- Static asset, character-coverage and HTML checks passed. Browser rendering remains unavailable; no rendered visual pass is claimed.

## 2026-10-22 second refinement
- Viewed original game-club photograph and existing team illustration. Removed fixed photo height/aspect ratio; image now retains all original content at every breakpoint.
- Career note uses exactly two nonwrapping spans and 1.3 line height with container-responsive handwriting size.
- Replaced six small framed line icons with unframed black-outline/orange/white editorial pictograms.
- Removed optional-club-participation note; enlarged only the emphasized message phrase.
- Rebuilt CTA decoration with orange burst, dashed orbit, yellow curved arrow, oversized edge rings, eyebrow label and white offset button shadow.
- Static checks pass; browser rendering is still unavailable and has not been represented as completed.
