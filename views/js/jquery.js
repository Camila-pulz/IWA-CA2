<script>

$(document).ready(function(){
$getJSON("nameFile", function(data){
var records = '';
$each(data, function(key, value){
records = '<tr>';
records = '<td>' + value.category+'</td>';
records = '<td>' + value.title+'</td>';
records = '<td>' + value.genre+'</td>';
records = '<td>' + value.year+'</td>';
records = '<td>' + value.duration+'</td>';
records = '<td>' + value.comments+'</td>';
records = '</tr>';

});

$('recordsTable').append(records);

})
});

</script>