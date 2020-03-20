$(function(){
  var e=$("#main");
  var myChart = echarts.init(document.getElementById('mains'));
  var xData = [],
      yData = [];
  for(var p=2000;p<=2020;p+=5){
    xData.push(p);
  }
  var option={
    title:{
      text:'JavaScript语言排名变化'
    },
    tooltip:{},
    lengend:{
      data:'排名'
    }, 
    xAxis:{
      data:xData
    },
    yAxis:{},
    series:[{
      name:'信息量',
      type:'line',
      data:[6,9,8,8,7]
    }]
  };
  myChart.setOption(option);


  return new Handsontable(e.get(0),{
    data:[
     ["Java","1","降","-0.01%"],
     ["C","2","升","+2.44%"],
     ["Python","3","升","+1.41%"],
     ["C++","4","降","-2.58%"],
     ["C#","5","升","+2.07%"],
     ["Visual Basic.NET","6","降","-1.17%"],
     ["JavaScript","7","降","-0.85%"],
    ],
    rowHeights: 35,
    colWidths: 180,   
    colHeaders:["语言名称","排名","升或降","变化幅度"]
 });
});
