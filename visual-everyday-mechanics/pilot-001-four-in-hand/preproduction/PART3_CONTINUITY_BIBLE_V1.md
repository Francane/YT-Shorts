# Pilot 001 — Part 3: Continuity Bible + Asset Requirement Matrix v1.0

**Status:** PREPRODUCTION LOCK CANDIDATE  
**Input:** Master Screenplay v1.0 + Director's Shot List v1.0 + validated deterministic Four-in-Hand mechanics.

## Continuity locks
- CHAR-MILO-01 remains the identity source of truth. Only pose/expression/wardrobe state/camera may vary.
- Wardrobe is continuous: white dress shirt, charcoal trousers, deep navy TIE-FIH-01.
- TIE-FIH-01 is one continuous object; strand identity never swaps.
- Instruction S0 orientation: wide screen-left, narrow screen-right.
- NARRATIVE-ROOM-01 is the same room before/after instruction.
- I00–I08 camera is locked frontal.
- Narrative hands may be simplified; instruction uses a consistent five-digit hand rig.
- Hands never hide a topology gate.

## Mechanical truth
S0 START → S1 CROSS → S2 BEHIND → S3 FRONT BAND → S4 NECK LOOP EXIT → S5 FRONT BAND EXIT → S6 SNUG → S7 FINAL.

Critical layer locks:
- S1 center: CAMERA → WIDE → NARROW → SHIRT
- S2 center: CAMERA → NARROW → WIDE → SHIRT
- S3: one front band
- S4: front band persists while active wide travels behind/up
- S5: active tip passes behind front band and reveals below
- S7: knot at collar; wide long/front; narrow short/behind

## Asset audit
**Existing/validated:** CHAR-MILO-01; TIE-FIH-01; NARRATIVE-ROOM-01 direction/master; instruction background spec; S0 locked master; S1–S6 deterministic states; S7 clean locked final; REF_A S1→S4; REF_B S4→S7.

**Create/finalize before video generation:** collar-up/down controlled references; room clean plate; deterministic editable time prop; Milo narrative expression/pose masters; safe failed-knot still; reusable five-digit hand library; cyan SVG graphics; polished S0–S7 reference composites; all shot first/last-frame pairs.

**Keep deterministic, not AI-generated:** instruction background; clock numerals; arrows/dotted paths/highlights; S0–S7 topology; mechanical control motion.

## Intentionally unresolved
Opening time is **8:52**. N05 return-time is **UNRESOLVED** and must be chosen before the clock asset is finalized. Do not let a video model invent it.

## Part 4 queue
1. Collar-up/down references
2. ROOM-01 clean plate
3. Editable time prop
4. Narrative Milo expression/pose sheet
5. Instruction five-digit hand library
6. Cyan SVG graphic primitives
7. Polished S0–S7 composites
8. Safe failed-knot still
9. Shot-specific first/last frames
10. Asset QA + freeze

No video-generation credits before this asset set passes continuity QA.

The full local Part 3 package also contains the 54-row `ASSET_REQUIREMENT_MATRIX.csv`, machine-readable `CONTINUITY_BIBLE_V1.json`, and `PART4_CREATION_QUEUE.csv`.