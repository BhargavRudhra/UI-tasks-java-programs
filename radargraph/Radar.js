 anychart.onDocumentReady(function () {
     var data1 = [
       {x: "Speed", value: 65},
       {x: "HP", value: 39},
       {x: "Defense", value: 43},
       {x: "Special Defense", value: 50},
       {x: "Special Attack", value: 60},
       {x: "Attack", value: 52}
     ];

     var data2 = [
       {x: "Speed", value: 45},
       {x: "HP", value: 45},
       {x: "Defense", value: 49},
       {x: "Special Defense", value: 65},
       {x: "Special Attack", value: 65},
       {x: "Attack", value: 49}
     ];  

     var data3 = [
       {x: "Speed", value: 43},
       {x: "HP", value: 44},
       {x: "Defense", value: 65},
       {x: "Special Defense", value: 64},
       {x: "Special Attack", value: 50},
       {x: "Attack", value: 48}
     ];  

     var chart = anychart.radar();

     chart.yScale()
       .minimum(35)
       .maximum(65)
       .ticks({'interval':5});

      chart.yGrid().palette(["gray 0.1", "gray 0.2"]);

      chart.area(data1).name('Charmander').markers(true).fill("#E55934", 0.3).stroke("#E55934")

      chart.area(data2).name('Bulbasaur').markers(true).fill("#9BC53D", 0.3).stroke("#9BC53D")
      
      chart.area(data3).name('Squirtle').markers(true).fill("#5BC0EB", 0.3).stroke("#5BC0EB")

      chart.title("Starter Pokemon Comparison Chart")

        .legend(true);

      chart.container('container');
      
      chart.draw();

    });