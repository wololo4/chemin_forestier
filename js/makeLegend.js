//declaration des variables globales
var map;
var legend;

//fonction qui permet de dessiner une legende de la couche des chemins
function makeLegend(){
    //declaration de la variable legende
    legend = L.control.Legend({
        title: 'Légende',
        position: "bottomright",
        collapsed: true,
        symbolWidth: 24,
        opacity: 1,
        column: 1,
        legends: [{           
            label: "01",
            type: "polyline",
            weight: 3.5,
            opacity: 1,
            color: 'red'
        },{            
            label: "02",
            type: "polyline",
            weight: 3,
            opacity: 1,
            color: 'red'
        },{            
            label: "03",
            type: "polyline",
            weight: 2.5,
            opacity: 1,
            color: 'red'
        },{            
            label: "04",
            type: "polyline",
            weight: 2,
            opacity: 1,
            color: 'red'
        },{
            label: "05",
            type: "polyline",
            weight: 2,
            dashArray: [5, 5],
            opacity: 1,
            color: 'red'
        },{            
            label: "HI",
            type: "polyline",
            weight: 1.5,
            dashArray: [5, 5],
            opacity: 1,
            color: 'blue'
        },{            
            label: "IN",
            type: "polyline",
            weight: 2,
            opacity: 1,
            color: 'grey'
        },{           
            label: "NF",
            type: "polyline",
            weight: 2,
            opacity: 1,
            color: 'black'            
        }]
    })
    //ajout de la legende à la page web
    .addTo(map);
}