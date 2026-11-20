# CrackGuard AI Project Details

**Team** CYBER_DYNAMO  
**University** South Eastern University of Sri Lanka  
**Competition** Innodata AI Catalyst 2026, University Track

## Problem

Inspectors may need lifts, scaffolding, or rope access to reach cracks
on upper building façades and bridge undersides. Engineers then need
clear images and reliable measurements to decide which cracks require
urgent follow-up and which can be monitored.

## Objectives

- Detect visible concrete cracks in uploaded inspection images.
- Estimate crack length, width, and area.
- Screen cracks to help engineers prioritise follow-up.
- Generate PDF reports with the inspection findings.
- Track changes in the same crack during repeat inspections.

## Current prototype

The Python prototype accepts an uploaded image, detects visible cracks,
estimates their dimensions, assigns a preliminary severity category,
and generates a PDF. The repository also includes a web dashboard.

## Technologies

- **Python and LangGraph** run the five inspection stages.
- **Computer vision and a segmentation model** detect crack regions
  and support measurement.
- **Streamlit** provides the Python prototype interface.
- **React, TypeScript, and Express** power the web dashboard.

## Planned development and evaluation

The next additions are missing-scale handling, comparison of repeat
inspection records, and a single-agent benchmark.

The benchmark will give both systems the same images, tools, screening
criteria, and report format. Test cases will include clear, blurred,
and angled images, as well as images with missing scale references.
We will compare measurement error, unsupported measurements, missed
urgent cases, report completeness, and processing time.

## Limitations

Blur, viewing angle, and scale quality can affect measurement reliability.
The prototype's severity category supports preliminary screening.
An engineer considers the structural context before deciding on repairs,
access restrictions, or further inspection.

See [Workflow.md](Workflow.md) for the inspection process.