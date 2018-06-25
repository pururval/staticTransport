var BusStops = [
  ['1', 43.008204, -78.785880,0.0], //ellicot
  ['2', 43.008204, -78.785880,0.1],
  ['3', 43.009153, -78.785902,0.2],
  ['4', 43.009224, -78.785237,0.3],
  ['5', 43.009224, -78.784743,0.4],
  ['6', 43.009216, -78.784056,0.5],
  ['7', 43.009228, -78.783495,0.6],
  ['8', 43.009228, -78.783173,0.7],
  ['9', 43.009369, -78.783173,0.8],
  ['10', 43.009549, -78.783184,0.9],
  ['11', 43.009533, -78.782766,1.0],
  ['12', 43.009549, -78.782423,1.1],
  ['13', 43.009510, -78.781951,1.2],
  ['14', 43.009259, -78.781908,1.3],
  ['15', 43.009047, -78.781876,1.4],
  ['16', 43.008874, -78.781844,1.5],
  ['17', 43.008678, -78.781782,1.6],
  ['18', 43.008521, -78.781750,1.7],
  ['19', 43.008223, -78.781632,1.8],
  ['20', 43.007972, -78.781493,1.9],
  ['21', 43.007697, -78.781386,2.0],
  ['22', 43.007438, -78.781783,2.1],
  ['23', 43.007250, -78.782040,2.2],
  ['24', 43.007124, -78.782201,2.3],
  ['25', 43.007022, -78.782383,2.4],
  ['26', 43.006826, -78.782576,2.5],
  ['27', 43.006630, -78.782898,2.6],
  ['28', 43.006457, -78.783188,2.7],
  ['29', 43.006292, -78.783499,2.8],
  ['30', 43.006166, -78.783864,2.9],
  ['31', 43.006033, -78.784143,3.0],
  ['32', 43.005923, -78.784497,3.1],
  ['33', 43.005821, -78.784862,3.2],
  ['34', 43.005644, -78.785184,3.3],
  ['35', 43.005550, -78.785581,3.4],
  ['36', 43.005597, -78.785924,3.5],
  ['37', 43.005401, -78.786128,3.6],
  ['38', 43.005268, -78.785983,3.7],
  ['39', 43.005107, -78.785956,3.8],
  ['40', 43.004868, -78.785945,3.9],
  ['41', 43.004656, -78.785934,4.0],
  ['42', 43.004503, -78.785945,4.05],
  ['43', 43.004354, -78.785966,4.10],
  ['44', 43.004201, -78.785955,4.15],
  ['45', 43.004060, -78.785939,4.20],
  ['46', 43.003919, -78.785939,4.25],
  ['47', 43.003766, -78.7859442,4.30],
  ['48', 43.003652, -78.785906,4.33],
  ['49', 43.003432, -78.785922,4.35],
  ['50', 43.003283, -78.785949,4.40],
  ['51', 43.003118, -78.785917,4.45],
  ['52', 43.002992, -78.785917,4.50],
  ['53', 43.002894, -78.785917,4.55],
  ['54', 43.002800, -78.785917,4.60],
  ['55', 43.002671, -78.785901,4.65],
  ['56', 43.002549, -78.785912,4.70],
  ['57', 43.002449, -78.785912,4.75],
  ['58', 43.002349, -78.785912,4.80],
  ['59', 43.002249, -78.785912,4.85],
  ['60', 43.002149, -78.785912,4.90],
  ['61', 43.002049, -78.785912,4.95],
  ['62', 43.001946, -78.785752,5], //lee loop
  ['63', 43.002055, -78.785570,5.05],
  ['64', 43.002141, -78.785855,5.10],
  ['65', 43.002314, -78.785876,5.15],
  ['66', 43.002589, -78.785876,5.20],
  ['67', 43.002895, -78.785908,5.25],
  ['68', 43.003138, -78.785951,5.30],
  ['69', 43.003169, -78.786155,5.35],
  ['70', 43.003193, -78.786391,5.40],
  ['71', 43.003169, -78.786595,5.45],
  ['72', 43.003185, -78.786777,5.50],
  ['73', 43.003193, -78.786927,5.55],
  ['74', 43.003193, -78.787077,5.60],
  ['75', 43.003193, -78.787367,5.65],
  ['76', 43.003193, -78.787603,5.70],
  ['77', 43.003201, -78.787839,5.75],
  ['78', 43.003138, -78.788236,5.80],
  ['79', 43.003162, -78.788504,5.85],
  ['80', 43.003162, -78.788815,5.90],
  ['81', 43.003178, -78.789148,5.95],
  ['82', 43.003170, -78.789427,6.00],
  ['83', 43.003170, -78.789642,6.05],
  ['84', 43.003162, -78.789857,6.10],
  ['85', 43.003170, -78.790039,6.15],
  ['86', 43.003178, -78.790232,6.20],
  ['87', 43.003178, -78.790414,6.25],
  ['88', 43.003194, -78.790693,6.30],
  ['89', 43.003178, -78.791337,6.35],
  ['90', 43.003139, -78.791959,6.40],
  ['91', 43.003155, -78.792399,6.35],
  ['92', 43.003147, -78.792860,6.40],
  ['93', 43.003147, -78.793182,6.55],
  ['94', 43.003092, -78.793407,6.60],
  ['95', 43.002810, -78.793407,6.65],
  ['96', 43.002669, -78.793407,6.70],
  ['97', 43.002387, -78.793426,6.80],
  ['98', 43.002214, -78.793437,6.90],
  ['99', 43.002120, -78.793448,7], //governors
  ['100', 43.002002, -78.793448,7.2],
  ['101', 43.001782, -78.793459,7.4],
  ['102', 43.001523, -78.793555,7.6],
  ['103', 43.001390, -78.793694,7.80],
  // ['104', 43.001390, -78.793694,8.00],
  ['105', 43.001154, -78.793973,8.00],
  ['106', 43.000981, -78.794096,8.20],
  ['107', 43.000840, -78.794155,8.40],
  ['108', 43.000644, -78.794171,8.60],
  ['109', 43.000495, -78.794155,8.80],
  ['110', 43.000346, -78.794139,9.00],
  ['111', 43.000181, -78.794144,9.20],
  ['112',   42.999953, -78.794128,9.40],
  // ['113',   42.999796, -78.794144,9.80],
  ['114', 42.999553, -78.794139,9.60],
  // ['115', 42.999294, -78.794144,10.20],
  ['116', 42.999114, -78.794160,9.80],
  ['117', 42.998871, -78.794155,10.0],
  // ['118', 42.998871, -78.794155,10.80],
  ['119', 42.998588, -78.794155,10.20],
  ['120', 42.998392, -78.794160,10.40],
  // ['121', 42.998243, -78.794155,11.40],
  ['122', 42.998023, -78.794117,10.60],
  ['123', 42.998031, -78.793886,10.80],
  ['124', 42.998055, -78.793591,11.0],
  // ['125', 42.998071, -78.793307,12.20],
  ['126', 42.998071, -78.793307,11.20],
  ['127', 42.998056, -78.792663,11.40],
  ['128', 42.998048, -78.792325,11.60],
  ['129', 42.998048, -78.791880,11.80],
  ['130', 42.998064, -78.791542,12.00],
  ['131', 42.998103, -78.791215,12.20],
  ['132', 42.998064, -78.790759,12.40],
  ['133', 42.998056, -78.790346,12.60],
  // ['134', 42.998064, -78.789933,14.60],
  ['135', 42.998064, -78.789692,12.80],
  ['136', 42.998064, -78.789418,13.00],
  ['137', 42.998064, -78.789091,13.20],
  ['138', 42.998307, -78.789161,13.40],
  ['139', 42.998558, -78.789145,13.60],
  ['140', 42.998833, -78.789183,13.80],
  ['141', 42.999123, -78.789178,14.00],
  ['142', 42.999523, -78.789173,14.30],
  ['143', 42.999719, -78.789168,14.60],
  ['144', 43.000119, -78.788953,14.80],
  ['145', 43.000153, -78.789152,15], //flint
['146',43.000130, -78.789335,15.03],
['147',43.000067, -78.789335,15.06],
// ['148',42.999965, -78.789335],
['149',42.999800, -78.789356,15.09],
['150',42.999682, -78.789356,15.13],
// ['151',42.999588, -78.789367],
['152',42.999431, -78.789356,15.16],
// ['153',42.999305, -78.789377],
['154',42.999227, -78.789356,15.19],
['155',42.999054, -78.789356,15.23],
// ['156',42.998936, -78.789367],
['157',42.998803, -78.789346,15.26],
['158',42.998654, -78.789357,15.29],
['159',42.998468, -78.789372,15.33],
// ['160',42.998327, -78.789340],
['161',42.998186, -78.789351,15.36],
['162',42.997935, -78.789351,15.39],
// ['163',42.997802, -78.789372],
['164',42.997645, -78.789426,15.43],
// ['15',42.997504, -78.789533],
['1646',42.997410, -78.789640,15.46],
// ['167',42.997348, -78.789779],
['168',42.997262, -78.789918,15.49],
// ['169',42.997176, -78.790132],
['170',42.997082, -78.790282,15.53],
// ['171',42.996956, -78.790518],
['172',42.996807, -78.790679,15.56],
// ['173',42.996689, -78.790776],
['174',42.996560, -78.790819,15.59],
['175',42.996380, -78.790886,15.63],
['176',42.996231, -78.790897,15.65],
// ['177',42.996145, -78.790908],
['178',42.996043, -78.790897,15.67],
// ['179',42.995768, -78.790918],
['180',42.995642, -78.790907,15.69],
['181',42.995454, -78.790875,15.73],
['182',42.995258, -78.790886,15.75],
['183',42.994949, -78.790870,15.77],
['184',42.994776, -78.790891,15.79],
['185',42.994599, -78.790918,15.83],
// ['186',42.994411, -78.790974],
['187',42.994223, -78.791049,15.85],
['188',42.994058, -78.791167,15.87],
// ['189',42.993909, -78.791296],
['190',42.993752, -78.791543,15.89],
['191',42.993619, -78.791811,15.93],
['192',42.993431, -78.792004,15.95],
['193',42.993298, -78.792122,15.97],
['194',42.993165, -78.792219,15.99],
['195', 42.992871, -78.792277,16], //service road
['1116', 42.965966, -78.810868,22], //maynard
['1117', 42.956712, -78.815621,25], //goodyear
['1118', 42.954025, -78.819289,30] , //main circle
['1119', 42.965966, -78.810868,33], //maynard
['11110', 42.992871, -78.792277,43], //service road
['11111', 43.000153, -78.789152,45], //flint
['11112', 43.002120, -78.793448,49], //governors
['11113', 43.001946, -78.785752,55] //lee loop
];
