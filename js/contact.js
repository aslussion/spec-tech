ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: coordinate,
                zoom: 17,
            }); 
            
            //метки
            myPlacemark = new ymaps.Placemark(coordinate, {
                iconCaption:iconCaption,
                /*hintContent: 'При наведении',
                balloonContent: 'При клике'*/
                },{preset: 'islands#blueCircleDotIconWithCaption'});
            myMap.geoObjects.add(myPlacemark);
        }