var wms_layers = [];

var lyr_STOrtofotocolor1945_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_blanc_i_negre_1945",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '[ST] Ortofoto color [1945]',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor1945_0, 0]);
var lyr_Ortofotocolor2024provisional_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_provisional",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto color 2024 (provisional)',
                            opacity: 0.700000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotocolor2024provisional_1, 0]);
var lyr_Topografia_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserveis.icgc.cat/servei/catalunya/topografia-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "topografia-territorial",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Topografia',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Topografia_2, 0]);
var lyr_LimitsAdministratius_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserveis.icgc.cat/servei/catalunya/divisions-administratives/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "divisions_administratives_comarques_1000000",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Limits Administratius',
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_LimitsAdministratius_3, 0]);
var lyr_Cadastre_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Cadastre',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Cadastre_4, 0]);
var format_Projectesencurs_5 = new ol.format.GeoJSON();
var jsonSource_Projectesencurs_5 = new ol.source.Vector({
    attributions: ' ',
    format: format_Projectesencurs_5
});var lyr_Projectesencurs_5 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Projectesencurs_5, 
    style: style_Projectesencurs_5,
    interactive: true,
    title: 'Projectes en curs'
});

function getProjectesencurs_5Json(geojson) {
    var features_Projectesencurs_5 = format_Projectesencurs_5.readFeatures(geojson);
    jsonSource_Projectesencurs_5.addFeatures(features_Projectesencurs_5);
}
var format_Obresencurs_6 = new ol.format.GeoJSON();
var jsonSource_Obresencurs_6 = new ol.source.Vector({
    attributions: ' ',
    format: format_Obresencurs_6
});var lyr_Obresencurs_6 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Obresencurs_6, 
    style: style_Obresencurs_6,
    interactive: true,
    title: 'Obres en curs'
});

function getObresencurs_6Json(geojson) {
    var features_Obresencurs_6 = format_Obresencurs_6.readFeatures(geojson);
    jsonSource_Obresencurs_6.addFeatures(features_Obresencurs_6);
}
var group_04Actuacions = new ol.layer.Group({
                                layers: [lyr_Projectesencurs_5,lyr_Obresencurs_6,],
                                fold: "open",
                                title: '04-Actuacions'});
var group_05Inventaris = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '05-Inventaris'});
var group_XarxaTransports = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Xarxa Transports'});
var group_EspaisNaturals = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Espais Naturals'});
var group_MediAmbient = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Medi Ambient'});
var group_ZonesInundables = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Zones Inundables'});
var group_MapaUrbanistic = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Mapa Urbanistic'});
var group_CartografiaBase = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor1945_0,lyr_Ortofotocolor2024provisional_1,lyr_Topografia_2,lyr_LimitsAdministratius_3,lyr_Cadastre_4,],
                                fold: "open",
                                title: 'Cartografia Base'});
var group_LimitsAdministratius = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Limits Administratius'});
var group_07TramitAudiencia = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '07-Tramit Audiencia'});

lyr_STOrtofotocolor1945_0.setVisible(true);lyr_Ortofotocolor2024provisional_1.setVisible(true);lyr_Topografia_2.setVisible(true);lyr_LimitsAdministratius_3.setVisible(true);lyr_Cadastre_4.setVisible(true);lyr_Projectesencurs_5.setVisible(true);lyr_Obresencurs_6.setVisible(true);
var layersList = [group_CartografiaBase,group_04Actuacions];
lyr_Projectesencurs_5.set('fieldAliases', {'ID': 'ID', 'MODE_TIPUS': 'MODE_TIPUS', 'CLAU': 'CLAU', 'TITOL': 'TITOL', 'UNITAT_RESPONSABLE': 'UNITAT_RESPONSABLE', 'PROGRAMA': 'PROGRAMA', 'TIPUS_OBRA': 'TIPUS_OBRA', 'SUBTIPUS_OBRA': 'SUBTIPUS_OBRA', 'TIPUS_PROJECTE': 'TIPUS_PROJECTE', 'SUBTIPUS_PROJECTE': 'SUBTIPUS_PROJECTE', 'SUBESTAT_PROJECTE': 'SUBESTAT_PROJECTE', 'ULTIM_PRESSUPOST': 'ULTIM_PRESSUPOST', 'DATAADJUDICACIOLICITACIO': 'DATAADJUDICACIOLICITACIO', 'DATALLIURAMENTDEFINITIU': 'DATALLIURAMENTDEFINITIU', 'DATAAPROVACIODEFINITIVA': 'DATAAPROVACIODEFINITIVA', });
lyr_Obresencurs_6.set('fieldAliases', {'ID': 'ID', 'MODE_TIPUS': 'MODE_TIPUS', 'CLAU': 'CLAU', 'TITOL': 'TITOL', 'UNITAT_RESPONSABLE': 'UNITAT_RESPONSABLE', 'NOM_RESPONSABLE': 'NOM_RESPONSABLE', 'PROGRAMA': 'PROGRAMA', 'TIPUS_OBRA': 'TIPUS_OBRA', 'SUBTIPUS_OBRA': 'SUBTIPUS_OBRA', 'SUBESTAT_OBRA': 'SUBESTAT_OBRA', 'LLIURATPECAMBIVA': 'LLIURATPECAMBIVA', 'SUMCOSTADJUDIVA': 'SUMCOSTADJUDIVA', 'ADJUDICATARI_OBRA': 'ADJUDICATARI_OBRA', 'ENCARREC_OBRA': 'ENCARREC_OBRA', 'MINDEINICIOBRA': 'MINDEINICIOBRA', 'MAXDEFINALOBRA': 'MAXDEFINALOBRA', 'BUFFERDISTANCE': 'BUFFERDISTANCE', });
lyr_Projectesencurs_5.set('fieldImages', {'ID': '', 'MODE_TIPUS': '', 'CLAU': '', 'TITOL': '', 'UNITAT_RESPONSABLE': '', 'PROGRAMA': '', 'TIPUS_OBRA': '', 'SUBTIPUS_OBRA': '', 'TIPUS_PROJECTE': '', 'SUBTIPUS_PROJECTE': '', 'SUBESTAT_PROJECTE': '', 'ULTIM_PRESSUPOST': '', 'DATAADJUDICACIOLICITACIO': '', 'DATALLIURAMENTDEFINITIU': '', 'DATAAPROVACIODEFINITIVA': '', });
lyr_Obresencurs_6.set('fieldImages', {'ID': '', 'MODE_TIPUS': '', 'CLAU': '', 'TITOL': '', 'UNITAT_RESPONSABLE': '', 'NOM_RESPONSABLE': '', 'PROGRAMA': '', 'TIPUS_OBRA': '', 'SUBTIPUS_OBRA': '', 'SUBESTAT_OBRA': '', 'LLIURATPECAMBIVA': '', 'SUMCOSTADJUDIVA': '', 'ADJUDICATARI_OBRA': '', 'ENCARREC_OBRA': '', 'MINDEINICIOBRA': '', 'MAXDEFINALOBRA': '', 'BUFFERDISTANCE': '', });
lyr_Projectesencurs_5.set('fieldLabels', {'ID': 'no label', 'MODE_TIPUS': 'no label', 'CLAU': 'no label', 'TITOL': 'no label', 'UNITAT_RESPONSABLE': 'no label', 'PROGRAMA': 'no label', 'TIPUS_OBRA': 'no label', 'SUBTIPUS_OBRA': 'no label', 'TIPUS_PROJECTE': 'no label', 'SUBTIPUS_PROJECTE': 'no label', 'SUBESTAT_PROJECTE': 'no label', 'ULTIM_PRESSUPOST': 'no label', 'DATAADJUDICACIOLICITACIO': 'no label', 'DATALLIURAMENTDEFINITIU': 'no label', 'DATAAPROVACIODEFINITIVA': 'no label', });
lyr_Obresencurs_6.set('fieldLabels', {'ID': 'no label', 'MODE_TIPUS': 'no label', 'CLAU': 'no label', 'TITOL': 'no label', 'UNITAT_RESPONSABLE': 'no label', 'NOM_RESPONSABLE': 'no label', 'PROGRAMA': 'no label', 'TIPUS_OBRA': 'no label', 'SUBTIPUS_OBRA': 'no label', 'SUBESTAT_OBRA': 'no label', 'LLIURATPECAMBIVA': 'no label', 'SUMCOSTADJUDIVA': 'no label', 'ADJUDICATARI_OBRA': 'no label', 'ENCARREC_OBRA': 'no label', 'MINDEINICIOBRA': 'no label', 'MAXDEFINALOBRA': 'no label', 'BUFFERDISTANCE': 'no label', });
lyr_Obresencurs_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});