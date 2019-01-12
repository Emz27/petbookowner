function list($){

    $('time.timeago').timeago();
    
    $var = $('#lawyers1');
    $modal = $('#myVeryGoodModal1');

    $var2 = $('#lawyers2');
    $modal2 = $('#myVeryGoodModal2');

    $var3 = $('#lawyers3');
    $modal3 = $('#myVeryGoodModal3');

    $.ajax({
        type:'GET',
        url: 'api/index.php/posts/lawyers',
        success: function(lawyers){
            obj = JSON.parse(lawyers);
            console.log("qwedasd", obj);
            $.each(obj, function(i, lawyer){
                console.log("qwedasd222", lawyer.lawyerID);
                $var.append(
                    '<li id="user_name" class="list-group-item" data-toggle="modal" data-target="#myModal'+lawyer.lawyerID+'">'+lawyer.userLastname+', '+lawyer.userFirstname+'</li>'
                );
                $modal.append(
                '<div class="modal fade" id="myModal'+lawyer.lawyerID+'">'+
                    '<div class="modal-dialog">'+
                        '<div class="modal-content">'+
                        '<div class="modal-header">'+
                            '<h4 id="user_name" class="modal-title">'+lawyer.userLastname+', '+lawyer.userFirstname+'</h4>'+
                            '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                        '</div>'+
                        '<div class="modal-body">'+
                        '<br>'+
                        '<img class="center" src="img/qmark.png" style="height: 150px; width: 160px;"/>'+
                        '<hr>'+
                        '<h3><small>Admitted to bar:</small></h3>'+
                        '<h6 id="admitted_to_bar"><small>'+lawyer.admittedToTheBar+'</small></h6><br>'+
                        '<h3><small>Specialty:</small></h3>'+
                        '<h6 id="specialty"><small>'+lawyer.specialization1+' || '+lawyer.specialization2+' || '+lawyer.specialization3+'</small></h6>'+
                        '<div class="modal-footer">'+
                            '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+
                        '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>' 
             );


            $var2.append(
                '<li id="user_name" class="list-group-item" data-toggle="modal" data-target="#myModal'+lawyer.lawyerID+'">'+lawyer.userLastname+', '+lawyer.userFirstname+'</li>'
            );
            $modal2.append(
            '<div class="modal fade" id="myModal'+lawyer.lawyerID+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 id="user_name" class="modal-title">'+lawyer.userLastname+', '+lawyer.userFirstname+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                    '<br>'+
                    '<img class="center" src="img/qmark.png" style="height: 150px; width: 160px;"/>'+
                    '<hr>'+
                    '<h3><small>Admitted to bar:</small></h3>'+
                    '<h6 id="admitted_to_bar"><small>'+lawyer.admittedToTheBar+'</small></h6><br>'+
                    '<h3><small>Specialty:</small></h3>'+
                    '<h6 id="specialty"><small>'+lawyer.specialization1+' || '+lawyer.specialization2+' || '+lawyer.specialization3+'</small></h6>'+
                    '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+
                    '</div>'+
                    '</div>'+
                '</div>'+
            '</div>' 
            );

            $var3.append(
                '<li id="user_name" class="list-group-item" data-toggle="modal" data-target="#myModal'+lawyer.lawyerID+'">'+lawyer.userLastname+', '+lawyer.userFirstname+'</li>'
            );
            $modal3.append(
            '<div class="modal fade" id="myModal'+lawyer.lawyerID+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 id="user_name" class="modal-title">'+lawyer.userLastname+', '+lawyer.userFirstname+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                    '<br>'+
                    '<img class="center" src="img/qmark.png" style="height: 150px; width: 160px;"/>'+
                    '<hr>'+
                    '<h3><small>Admitted to bar:</small></h3>'+
                    '<h6 id="admitted_to_bar"><small>'+lawyer.admittedToTheBar+'</small></h6><br>'+
                    '<h3><small>Specialty:</small></h3>'+
                    '<h6 id="specialty"><small>'+lawyer.specialization1+' || '+lawyer.specialization2+' || '+lawyer.specialization3+'</small></h6>'+
                    '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+
                    '</div>'+
                    '</div>'+
                '</div>'+
            '</div>' 
         );

            });     
        }
    });

}


jQuery(document).ready(function(){
    list(jQuery);
});