/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";

import powerbi from "powerbi-visuals-api";
import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

/**
 * Generic Line Settings Card
 */
class LineSettingsCard extends FormattingSettingsCard {
    lineColor = new formattingSettings.ColorPicker({
        name: "lineColor",
        displayName: "Couleur de la ligne",
        value: { value: "#3B60C4" }
    });

    strokeWidth = new formattingSettings.NumUpDown({
        name: "strokeWidth",
        displayName: "Épaisseur",
        value: 3
    });

    showMarkers = new formattingSettings.ToggleSwitch({
        name: "showMarkers",
        displayName: "Afficher les marqueurs",
        value: false
    });

    markerSize = new formattingSettings.NumUpDown({
        name: "markerSize",
        displayName: "Taille des marqueurs",
        value: 5
    });

    lineStyle = new formattingSettings.ItemDropdown({
        name: "lineStyle",
        displayName: "Style de ligne",
        items: [
            { value: "solid", displayName: "Continu" },
            { value: "dashed", displayName: "Pointillés" },
            { value: "dotted", displayName: "Points" }
        ],
        value: { value: "solid", displayName: "Continu" }
    });

    stepped = new formattingSettings.ToggleSwitch({
        name: "stepped",
        displayName: "Ligne en escalier",
        value: false
    });

    slices: Array<FormattingSettingsSlice> = [
        this.lineColor, 
        this.strokeWidth, 
        this.lineStyle,
        this.showMarkers, 
        this.markerSize,
        this.stepped
    ];

    constructor(name: string, displayName: string, defaultColor: string) {
        super();
        this.name = name;
        this.displayName = displayName;
        this.lineColor.value.value = defaultColor;
    }
}

/**
 * Generic Gradient Settings Card
 */
class GradientSettingsCard extends FormattingSettingsCard {
    showGradient = new formattingSettings.ToggleSwitch({
        name: "showGradient",
        displayName: "Afficher le dégradé",
        value: true
    });

    gradientColor = new formattingSettings.ColorPicker({
        name: "gradientColor",
        displayName: "Couleur du dégradé",
        value: { value: "#3B60C4" }
    });

    gradientIntensity = new formattingSettings.NumUpDown({
        name: "gradientIntensity",
        displayName: "Intensité (0-1)",
        value: 0.3
    });

    gradientDirection = new formattingSettings.ItemDropdown({
        name: "gradientDirection",
        displayName: "Direction",
        items: [
            { value: "vertical", displayName: "Haut → Bas" },
            { value: "vertical-reverse", displayName: "Bas → Haut" },
            { value: "horizontal", displayName: "Gauche → Droite" },
            { value: "horizontal-reverse", displayName: "Droite → Gauche" },
            { value: "diagonal", displayName: "Diagonale ↘" },
            { value: "diagonal-reverse", displayName: "Diagonale ↙" }
        ],
        value: { value: "vertical", displayName: "Haut → Bas" }
    });

    slices: Array<FormattingSettingsSlice> = [
        this.showGradient,
        this.gradientColor, 
        this.gradientIntensity, 
        this.gradientDirection
    ];

    constructor(name: string, displayName: string, defaultColor: string) {
        super();
        this.name = name;
        this.displayName = displayName;
        this.gradientColor.value.value = defaultColor;
    }
}

/**
 * X Axis Settings Card
 */
class XAxisSettingsCard extends FormattingSettingsCard {
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher l'axe X",
        value: true
    });

    axisColor = new formattingSettings.ColorPicker({
        name: "axisColor",
        displayName: "Couleur",
        value: { value: "#666666" }
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 11
    });

    fontFamily = new formattingSettings.ItemDropdown({
        name: "fontFamily",
        displayName: "Famille de police",
        items: [
            { value: "Segoe UI", displayName: "Segoe UI" },
            { value: "Arial", displayName: "Arial" },
            { value: "Courier New", displayName: "Courier New" },
            { value: "Georgia", displayName: "Georgia" },
            { value: "Verdana", displayName: "Verdana" }
        ],
        value: { value: "Segoe UI", displayName: "Segoe UI" }
    });

    title = new formattingSettings.ToggleSwitch({
        name: "title",
        displayName: "Afficher le titre",
        value: false
    });

    titleText = new formattingSettings.TextInput({
        name: "titleText",
        displayName: "Texte du titre",
        value: "",
        placeholder: "Titre de l'axe X"
    });

    sortOrder = new formattingSettings.ItemDropdown({
        name: "sortOrder",
        displayName: "Ordre de tri",
        items: [
            { value: "dateChronological", displayName: "Chronologique (dates)" },
            { value: "ascending", displayName: "Croissant" },
            { value: "descending", displayName: "Décroissant" },
            { value: "byValue", displayName: "Par valeur Y (max → min)" }
        ],
        value: { value: "dateChronological", displayName: "Chronologique (dates)" }
    });

    name: string = "xAxisSettings";
    displayName: string = "Axe X";
    slices: Array<FormattingSettingsSlice> = [
        this.show,
        this.axisColor,
        this.fontSize,
        this.fontFamily,
        this.title,
        this.titleText,
        this.sortOrder
    ];
}

/**
 * Y Axis Settings Card
 */
class YAxisSettingsCard extends FormattingSettingsCard {
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher l'axe Y",
        value: true
    });

    axisColor = new formattingSettings.ColorPicker({
        name: "axisColor",
        displayName: "Couleur",
        value: { value: "#666666" }
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 11
    });

    fontFamily = new formattingSettings.ItemDropdown({
        name: "fontFamily",
        displayName: "Famille de police",
        items: [
            { value: "Segoe UI", displayName: "Segoe UI" },
            { value: "Arial", displayName: "Arial" },
            { value: "Courier New", displayName: "Courier New" },
            { value: "Georgia", displayName: "Georgia" },
            { value: "Verdana", displayName: "Verdana" }
        ],
        value: { value: "Segoe UI", displayName: "Segoe UI" }
    });

    title = new formattingSettings.ToggleSwitch({
        name: "title",
        displayName: "Afficher le titre",
        value: false
    });

    titleText = new formattingSettings.TextInput({
        name: "titleText",
        displayName: "Texte du titre",
        value: "",
        placeholder: "Titre de l'axe Y"
    });

    displayUnits = new formattingSettings.ItemDropdown({
        name: "displayUnits",
        displayName: "Unités d'affichage",
        items: [
            { value: "0", displayName: "Auto" },
            { value: "1", displayName: "Aucun" },
            { value: "1000", displayName: "Milliers (K)" },
            { value: "1000000", displayName: "Millions (M)" },
            { value: "1000000000", displayName: "Milliards (Mds)" }
        ],
        value: { value: "0", displayName: "Auto" }
    });

    precision = new formattingSettings.NumUpDown({
        name: "precision",
        displayName: "Décimales",
        value: 0,
        options: {
            minValue: { value: 0, type: powerbi.visuals.ValidatorType.Min },
            maxValue: { value: 20, type: powerbi.visuals.ValidatorType.Max }
        }
    });

    useYAxisBis = new formattingSettings.ToggleSwitch({
        name: "useYAxisBis",
        displayName: "Afficher axe Y bis",
        value: false
    });

    name: string = "yAxisSettings";
    displayName: string = "Axe Y";
    slices: Array<FormattingSettingsSlice> = [
        this.show,
        this.axisColor,
        this.fontSize,
        this.fontFamily,
        this.displayUnits,
        this.precision,
        this.title,
        this.titleText,
        this.useYAxisBis
    ];
}

/**
 * Grid Settings Card
 */
class GridSettingsCard extends FormattingSettingsCard {
    showHorizontal = new formattingSettings.ToggleSwitch({
        name: "showHorizontal",
        displayName: "Grille horizontale",
        value: true
    });

    showVertical = new formattingSettings.ToggleSwitch({
        name: "showVertical",
        displayName: "Grille verticale",
        value: false
    });

    gridColor = new formattingSettings.ColorPicker({
        name: "gridColor",
        displayName: "Couleur de la grille",
        value: { value: "#f0f0f0" }
    });

    gridThickness = new formattingSettings.NumUpDown({
        name: "gridThickness",
        displayName: "Épaisseur",
        value: 1
    });

    gridStyle = new formattingSettings.ItemDropdown({
        name: "gridStyle",
        displayName: "Style",
        items: [
            { value: "solid", displayName: "Continu" },
            { value: "dashed", displayName: "Pointillés" }
        ],
        value: { value: "dashed", displayName: "Pointillés" }
    });

    name: string = "gridSettings";
    displayName: string = "Grille";
    slices: Array<FormattingSettingsSlice> = [
        this.showHorizontal,
        this.showVertical,
        this.gridColor,
        this.gridThickness,
        this.gridStyle
    ];
}

/**
 * Data Labels Settings Card
 */
class DataLabelsCard extends FormattingSettingsCard {
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher les étiquettes",
        value: false
    });

    color = new formattingSettings.ColorPicker({
        name: "color",
        displayName: "Couleur",
        value: { value: "#000000" }
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 9
    });

    fontFamily = new formattingSettings.ItemDropdown({
        name: "fontFamily",
        displayName: "Famille de police",
        items: [
            { value: "Segoe UI", displayName: "Segoe UI" },
            { value: "Arial", displayName: "Arial" },
            { value: "Courier New", displayName: "Courier New" }
        ],
        value: { value: "Segoe UI", displayName: "Segoe UI" }
    });

    displayUnits = new formattingSettings.ItemDropdown({
        name: "displayUnits",
        displayName: "Unités d'affichage",
        items: [
            { value: "0", displayName: "Auto" },
            { value: "1", displayName: "Aucun" },
            { value: "1000", displayName: "Milliers (K)" },
            { value: "1000000", displayName: "Millions (M)" },
            { value: "1000000000", displayName: "Milliards (Mds)" }
        ],
        value: { value: "0", displayName: "Auto" }
    });

    precision = new formattingSettings.NumUpDown({
        name: "precision",
        displayName: "Décimales",
        value: 0,
        options: {
            minValue: { value: 0, type: powerbi.visuals.ValidatorType.Min },
            maxValue: { value: 20, type: powerbi.visuals.ValidatorType.Max }
        }
    });

    name: string = "dataLabels";
    displayName: string = "Étiquettes de données";
    slices: Array<FormattingSettingsSlice> = [
        this.show,
        this.color,
        this.fontSize,
        this.fontFamily,
        this.displayUnits,
        this.precision
    ];
}

/**
 * Legend Settings Card
 */
class LegendCard extends FormattingSettingsCard {
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher la légende",
        value: true
    });

    position = new formattingSettings.ItemDropdown({
        name: "position",
        displayName: "Position",
        items: [
            { value: "Top", displayName: "Haut" },
            { value: "Bottom", displayName: "Bas" },
            { value: "Left", displayName: "Gauche" },
            { value: "Right", displayName: "Droite" },
            { value: "TopCenter", displayName: "Haut centre" },
            { value: "BottomCenter", displayName: "Bas centre" }
        ],
        value: { value: "Top", displayName: "Haut" }
    });

    fontColor = new formattingSettings.ColorPicker({
        name: "fontColor",
        displayName: "Couleur",
        value: { value: "#666666" }
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Taille du texte",
        value: 10
    });

    fontFamily = new formattingSettings.ItemDropdown({
        name: "fontFamily",
        displayName: "Famille de police",
        items: [
            { value: "Segoe UI", displayName: "Segoe UI" },
            { value: "Arial", displayName: "Arial" },
            { value: "Courier New", displayName: "Courier New" }
        ],
        value: { value: "Segoe UI", displayName: "Segoe UI" }
    });

    name: string = "legend";
    displayName: string = "Légende";
    slices: Array<FormattingSettingsSlice> = [
        this.show,
        this.position,
        this.fontColor,
        this.fontSize,
        this.fontFamily
    ];
}

/**
 * Visual settings model class
 */
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
    // Palette par défaut
    private defaultColors = ["#3B60C4", "#E94F37", "#44BBA4", "#F7B538", "#DB5461", "#3F88C5", "#7D4E57", "#D66853", "#212D40", "#11151C"];

    lineSettings1 = new LineSettingsCard("lineSettings1", "Ligne 1", this.defaultColors[0]);
    gradientSettings1 = new GradientSettingsCard("gradientSettings1", "Dégradé 1", this.defaultColors[0]);

    lineSettings2 = new LineSettingsCard("lineSettings2", "Ligne 2", this.defaultColors[1]);
    gradientSettings2 = new GradientSettingsCard("gradientSettings2", "Dégradé 2", this.defaultColors[1]);

    lineSettings3 = new LineSettingsCard("lineSettings3", "Ligne 3", this.defaultColors[2]);
    gradientSettings3 = new GradientSettingsCard("gradientSettings3", "Dégradé 3", this.defaultColors[2]);

    lineSettings4 = new LineSettingsCard("lineSettings4", "Ligne 4", this.defaultColors[3]);
    gradientSettings4 = new GradientSettingsCard("gradientSettings4", "Dégradé 4", this.defaultColors[3]);

    lineSettings5 = new LineSettingsCard("lineSettings5", "Ligne 5", this.defaultColors[4]);
    gradientSettings5 = new GradientSettingsCard("gradientSettings5", "Dégradé 5", this.defaultColors[4]);

    lineSettings6 = new LineSettingsCard("lineSettings6", "Ligne 6", this.defaultColors[5]);
    gradientSettings6 = new GradientSettingsCard("gradientSettings6", "Dégradé 6", this.defaultColors[5]);

    lineSettings7 = new LineSettingsCard("lineSettings7", "Ligne 7", this.defaultColors[6]);
    gradientSettings7 = new GradientSettingsCard("gradientSettings7", "Dégradé 7", this.defaultColors[6]);

    lineSettings8 = new LineSettingsCard("lineSettings8", "Ligne 8", this.defaultColors[7]);
    gradientSettings8 = new GradientSettingsCard("gradientSettings8", "Dégradé 8", this.defaultColors[7]);

    lineSettings9 = new LineSettingsCard("lineSettings9", "Ligne 9", this.defaultColors[8]);
    gradientSettings9 = new GradientSettingsCard("gradientSettings9", "Dégradé 9", this.defaultColors[8]);

    lineSettings10 = new LineSettingsCard("lineSettings10", "Ligne 10", this.defaultColors[9]);
    gradientSettings10 = new GradientSettingsCard("gradientSettings10", "Dégradé 10", this.defaultColors[9]);

    xAxisSettings = new XAxisSettingsCard();
    yAxisSettings = new YAxisSettingsCard();
    gridSettings = new GridSettingsCard();
    dataLabels = new DataLabelsCard();
    legend = new LegendCard();

    cards = [
        this.lineSettings1, this.gradientSettings1,
        this.lineSettings2, this.gradientSettings2,
        this.lineSettings3, this.gradientSettings3,
        this.lineSettings4, this.gradientSettings4,
        this.lineSettings5, this.gradientSettings5,
        this.lineSettings6, this.gradientSettings6,
        this.lineSettings7, this.gradientSettings7,
        this.lineSettings8, this.gradientSettings8,
        this.lineSettings9, this.gradientSettings9,
        this.lineSettings10, this.gradientSettings10,
        this.xAxisSettings,
        this.yAxisSettings,
        this.gridSettings,
        this.dataLabels,
        this.legend
    ];
}
