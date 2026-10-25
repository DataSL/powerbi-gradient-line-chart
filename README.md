# Gradient Line Chart (Open Source) for Power BI

Line chart with gradient fills for up to eight series, styled line by line, with axis formatting, tooltips and drill-down.

Free and open source Power BI custom visual by [Data SL Consulting](https://data-slconsulting.com/), an independent data and AI consultancy in Paris.

## Install

1. Download the latest `.pbiviz` file from the [Releases](https://github.com/DataSL/powerbi-gradient-line-chart/releases) page.
2. In Power BI Desktop, open the **Visualizations** pane, select **…** (Get more visuals), then **Import a visual from a file**, and choose the downloaded file.

This open-source edition is **not Power BI certified**: it can't be exported to PowerPoint or shown in email subscriptions, and organisations that only allow certified visuals will block it. A Power BI certified edition is available on [Microsoft Marketplace](https://marketplace.microsoft.com/product/dslc1696681601173.gradientlinechart).

## Build from source

```bash
npm ci
npx -y powerbi-visuals-tools@5.6.0 package
```

The package is created in `dist/`.

## License and attribution

Licensed under the [Apache License 2.0](LICENSE). You can use, modify and redistribute this visual, including commercially, provided that you keep the [NOTICE](NOTICE) file and the attribution to **Data SL Consulting** in any redistribution.

## En français

Visuel Power BI gratuit et open source de [Data SL Consulting](https://data-slconsulting.com/), cabinet de conseil data et IA à Paris. Téléchargez le fichier `.pbiviz` dans les [versions publiées](https://github.com/DataSL/powerbi-gradient-line-chart/releases), puis importez-le dans Power BI Desktop (volet Visualisations › … › Importer un visuel à partir d’un fichier). Licence Apache 2.0 : toute redistribution doit conserver le fichier NOTICE et la mention de Data SL Consulting.
