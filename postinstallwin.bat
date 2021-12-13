mkdir web\lib\ol
mkdir web\lib\ol-layerswitcher
mkdir web\lib\proj4
mkdir web\lib\extjs
xcopy /E /R /Y node_modules\openlayers-dist\ol.js web\lib\ol\ 
xcopy /E /R /Y node_modules\openlayers-dist\ol.css web\lib\ol\ 
xcopy /E /R /Y node_modules\ol-layerswitcher\dist\ol-layerswitcher.js web\lib\ol-layerswitcher\ 
xcopy /E /R /Y node_modules\ol-layerswitcher\dist\ol-layerswitcher.css web\lib\ol-layerswitcher\ 
xcopy /E /R /Y node_modules\proj4\dist\proj4.js web\lib\proj4\ 
xcopy /E /R /Y node_modules\extjs-gpl\build\ext-all.js web\lib\extjs\ 
mkdir web\lib\extjs\classic 
xcopy /E /R /Y node_modules\extjs-gpl\build\classic\locale web\lib\extjs\classic\locale
xcopy /E /R /Y node_modules\extjs-gpl\build\classic\theme-triton web\lib\extjs\classic\theme-triton 
mkdir web\lib\extjs\packages\charts 
xcopy /E /R /Y node_modules\extjs-gpl\build\packages\charts\classic web\lib\extjs\packages\charts\classic