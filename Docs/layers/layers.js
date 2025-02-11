var wms_layers = [];

var lyr_Ortofotocolor2024provisional_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_provisional",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto color 2024 (provisional)",
                            opacity: 0.700000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotocolor2024provisional_0, 0]);
var lyr_Topografia_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserveis.icgc.cat/servei/catalunya/topografia-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "topografia-territorial",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Topografia",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Topografia_1, 1]);
var lyr_Cadastre_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Cadastre",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Cadastre_2, 1]);
var lyr_ZonesinundablesperT500_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://sig.gencat.cat/ows/AIGUA/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "AIGUA_LI500",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Zones inundables per T500",
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_ZonesinundablesperT500_3, 1]);
var lyr_ZonesinundablesperT100_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://sig.gencat.cat/ows/AIGUA/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "AIGUA_LI100",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Zones inundables per T100",
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_ZonesinundablesperT100_4, 1]);
var lyr_ZonesinundablesperT10_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://sig.gencat.cat/ows/AIGUA/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "AIGUA_LI10",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Zones inundables per T10",
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_ZonesinundablesperT10_5, 1]);
var lyr_Zonadefluxpreferent_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://sig.gencat.cat/ows/AIGUA/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "AIGUA_ZFP",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Zona de flux preferent",
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_Zonadefluxpreferent_6, 1]);
var lyr_DominiPblicHidrulic_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://sig.gencat.cat/ows/AIGUA/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "AIGUA_DPH",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Domini Públic Hidràulic",
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_DominiPblicHidrulic_7, 1]);
var lyr_Pladespaisdintersnatural_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://sig.gencat.cat/ows/ESPAIS_NATURALS/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ESPAISNATURALS_PEIN",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Pla d'espais d'interès natural",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Pladespaisdintersnatural_8, 1]);
var lyr_XarxaNatura2000_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://sig.gencat.cat/ows/ESPAIS_NATURALS/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ESPAISNATURALS_XARNAT_2000",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Xarxa Natura 2000",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_XarxaNatura2000_9, 1]);

        var lyr_GoogleTraffic_10 = new ol.layer.Tile({
            'title': 'Google Traffic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });
var lyr_XT_VIARI_VIESCICLISTES_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://sig.gencat.cat/ows/XARXES_TRANSPORT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "XT_VIARI_VIESCICLISTES",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "XT_VIARI_VIESCICLISTES",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_XT_VIARI_VIESCICLISTES_11, 1]);
var lyr_XT_GRAF_CATALEG_CARRETERES_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://sig.gencat.cat/ows/XARXES_TRANSPORT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "XT_GRAF_CATALEG_CARRETERES",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "XT_GRAF_CATALEG_CARRETERES",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_XT_GRAF_CATALEG_CARRETERES_12, 1]);
var lyr_XT_GRAF_CATALEG_FERRO_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://sig.gencat.cat/ows/XARXES_TRANSPORT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "XT_GRAF_CATALEG_FERRO",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "XT_GRAF_CATALEG_FERRO",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_XT_GRAF_CATALEG_FERRO_13, 1]);
var lyr_XT_VIARI_IMD_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://sig.gencat.cat/ows/XARXES_TRANSPORT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "XT_VIARI_IMD",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "XT_VIARI_IMD",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_XT_VIARI_IMD_14, 1]);
var lyr_XT_GRAF_CATALEG_FITES_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://sig.gencat.cat/ows/XARXES_TRANSPORT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "XT_GRAF_CATALEG_FITES",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "XT_GRAF_CATALEG_FITES",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_XT_GRAF_CATALEG_FITES_15, 1]);
var lyr_XT_VIARI_ESTRUCTURES_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://sig.gencat.cat/ows/XARXES_TRANSPORT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "XT_VIARI_ESTRUCTURES",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "XT_VIARI_ESTRUCTURES",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_XT_VIARI_ESTRUCTURES_16, 1]);
var lyr_XT_VIARI_ACTUACIO_OBRES_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://sig.gencat.cat/ows/XARXES_TRANSPORT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "XT_VIARI_ACTUACIO_OBRES",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "XT_VIARI_ACTUACIO_OBRES",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_XT_VIARI_ACTUACIO_OBRES_17, 1]);
var lyr_XT_VIARI_ACTUACIONS_PROJ_V_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://sig.gencat.cat/ows/XARXES_TRANSPORT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "XT_VIARI_ACTUACIONS_PROJ_V",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "XT_VIARI_ACTUACIONS_PROJ_V",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_XT_VIARI_ACTUACIONS_PROJ_V_18, 1]);
var group_04Actuacions = new ol.layer.Group({
                                layers: [lyr_XT_VIARI_ACTUACIO_OBRES_17,lyr_XT_VIARI_ACTUACIONS_PROJ_V_18,],
                                fold: "open",
                                title: "04-Actuacions"});
var group_05Inventaris = new ol.layer.Group({
                                layers: [lyr_XT_VIARI_ESTRUCTURES_16,],
                                fold: "open",
                                title: "05-Inventaris"});
var group_XarxaTransports = new ol.layer.Group({
                                layers: [lyr_GoogleTraffic_10,lyr_XT_VIARI_VIESCICLISTES_11,lyr_XT_GRAF_CATALEG_CARRETERES_12,lyr_XT_GRAF_CATALEG_FERRO_13,lyr_XT_VIARI_IMD_14,lyr_XT_GRAF_CATALEG_FITES_15,],
                                fold: "open",
                                title: "Xarxa Transports"});
var group_EspaisNaturals = new ol.layer.Group({
                                layers: [lyr_Pladespaisdintersnatural_8,lyr_XarxaNatura2000_9,],
                                fold: "open",
                                title: "Espais Naturals"});
var group_MediAmbient = new ol.layer.Group({
                                layers: [lyr_Zonadefluxpreferent_6,lyr_DominiPblicHidrulic_7,],
                                fold: "open",
                                title: "Medi Ambient"});
var group_ZonesInundables = new ol.layer.Group({
                                layers: [lyr_ZonesinundablesperT500_3,lyr_ZonesinundablesperT100_4,lyr_ZonesinundablesperT10_5,],
                                fold: "open",
                                title: "Zones Inundables"});
var group_MapaUrbanistic = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa Urbanistic"});
var group_CartografiaBase = new ol.layer.Group({
                                layers: [lyr_Ortofotocolor2024provisional_0,lyr_Topografia_1,lyr_Cadastre_2,],
                                fold: "open",
                                title: "Cartografia Base"});
var group_LimitsAdministratius = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Limits Administratius"});
var group_07TramitAudiencia = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "07-Tramit Audiencia"});

lyr_Ortofotocolor2024provisional_0.setVisible(true);lyr_Topografia_1.setVisible(false);lyr_Cadastre_2.setVisible(false);lyr_ZonesinundablesperT500_3.setVisible(false);lyr_ZonesinundablesperT100_4.setVisible(false);lyr_ZonesinundablesperT10_5.setVisible(false);lyr_Zonadefluxpreferent_6.setVisible(false);lyr_DominiPblicHidrulic_7.setVisible(false);lyr_Pladespaisdintersnatural_8.setVisible(false);lyr_XarxaNatura2000_9.setVisible(false);lyr_GoogleTraffic_10.setVisible(false);lyr_XT_VIARI_VIESCICLISTES_11.setVisible(false);lyr_XT_GRAF_CATALEG_CARRETERES_12.setVisible(false);lyr_XT_GRAF_CATALEG_FERRO_13.setVisible(false);lyr_XT_VIARI_IMD_14.setVisible(false);lyr_XT_GRAF_CATALEG_FITES_15.setVisible(false);lyr_XT_VIARI_ESTRUCTURES_16.setVisible(false);lyr_XT_VIARI_ACTUACIO_OBRES_17.setVisible(false);lyr_XT_VIARI_ACTUACIONS_PROJ_V_18.setVisible(false);
var layersList = [group_CartografiaBase,group_ZonesInundables,group_MediAmbient,group_EspaisNaturals,group_XarxaTransports,group_05Inventaris,group_04Actuacions];
