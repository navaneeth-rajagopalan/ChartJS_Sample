$(document).ready(function(){
    var chart = $("#chart");
    var label = [];
    var data = [];
    $.ajax({
        url: "http://localhost:5555/getSampleData/5000",
        method: "GET",
        dataType: "json",
        success: function(data){
            var myChart = new Chart(chart, {
                type: 'horizontalBar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: '# of incidents',
                        data: data.data,
                        borderWidth: 0
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    },
                    stacked: false
                }
            });
        },
        error: function(err){
            console.log(err);
        }
    })
    
});
