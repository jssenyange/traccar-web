mkdir  web\lib\ol
mkdir  web\lib\ol-layerswitcher
mkdir  web\lib\proj4
mkdir  web\lib\extjs
copy /y node_modules\openlayers-dist\ol.js web\lib\ol\ 
copy /y node_modules\openlayers-dist\ol.css web\lib\ol\ 
copy /y node_modules\ol-layerswitcher\dist\ol-layerswitcher.js web\lib\ol-layerswitcher\
copy /y node_modules\ol-layerswitcher\dist\ol-layerswitcher.css web\lib\ol-layerswitcher\
copy /y node_modules\proj4\dist\proj4.js web\lib\proj4\
copy /y node_modules\extjs-gpl\build\ext-all.js web\lib\extjs\
mkdir web\lib\extjs\classic
robocopy  node_modules\extjs-gpl\build\classic\locale web\lib\extjs\classic\locale /E /COPY:DA /NC /NS /NFL /NDL /NP
robocopy  node_modules\extjs-gpl\build\classic\theme-triton web\lib\extjs\classic\theme-triton /E /COPY:DA /NC /NS /NFL /NDL /NP
mkdir web\lib\extjs\packages\charts
robocopy node_modules\extjs-gpl\build\packages\charts\classic web\lib\extjs\packages\charts\classic /E /COPY:DA /NC /NS /NFL /NDL /NP
        