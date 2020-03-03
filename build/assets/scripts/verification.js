var uploading = false;
//var reloadInterval = null;
var previewNode = document.querySelector("#template");
previewNode.id = "";
var previewTemplate = previewNode.parentNode.innerHTML;
previewNode.parentNode.removeChild(previewNode);

var myDropzone = new Dropzone(document.getElementById('file_upload'),
    {
        url: "upload.php", // Set the url
        thumbnailWidth: 80,
        thumbnailHeight: 80,
        parallelUploads: 20,
        previewTemplate: previewTemplate,
        autoQueue: false, // Make sure the files aren't queued until manually added
        previewsContainer: "#previews", // Define the container to display the previews
        clickable: ".fileinput-button", // Define the element that should be used as click trigger to select files.
        acceptedFiles: "image/*,application/pdf",
        uploadMultiple: true
    }
);

/*
function reload_uploaded_list(){
    $('.file-list').load("filelist.php?code="+code+"&token="+token);
    //document.location.reload(true);
}

$(function() {
    reload_uploaded_list();
    reloadInterval = setInterval(reload_uploaded_list,1000);
});
*/

document.querySelector("#actions .start").onclick = function() {
    myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
};
myDropzone.on("totaluploadprogress", function(progress) {
    document.querySelector("#total-progress .progress-bar").style.width = progress + "%";
    //console.log(progress);
});

myDropzone.on("queuecomplete", function(progress) {
    document.querySelector("#total-progress").style.opacity = "0";
    uploading = false;
});

myDropzone.on("sending", function(file) {
    // Show the total progress bar when upload starts
    document.querySelector("#total-progress").style.opacity = "1";
    // And disable the start button
    //console.log(file);
    uploading = true;
});

myDropzone.on("success",function(file,res) {
    var comment = $('.comment_box').val();
    console.log(comment);
    $.post("/verification/save_comment.php",{code:code,code_id:code_id,token:token,comment:comment});

    var json = $.parseJSON(res);
    if (json.success) {
      //success
      $('.upload-completed').show();
        myDropzone.removeAllFiles(true);
    } else {
      myDropzone.removeAllFiles(true);
      //alert(json.err_message);
      $('.error-message').text(json.err_message);
      $('.upload-failed').show();
    }

    setTimeout(function(){
      $('.upload-failed').hide();
      $('.upload-completed').hide();
        location.reload();
    },1500);
});

document.querySelector("#actions .cancel").onclick = function() {
    myDropzone.removeAllFiles(true);
};
