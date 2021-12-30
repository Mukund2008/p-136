status="";
object_name="";

function setup()
{
    canvas = createCanvas(380,280);
    canvas.center();
 video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
  image(video,0,0,380,280);
}


    function start()
    {
     objectDetector=ml5.objectDetector("cocossd",modelLoaded);
     document.getElementById("status").innerHTML="Status : Detecting Objects";
     object_name=document.getElementById("name_of_object").value;
    }

    function modelLoaded()
    {
     console.log("Model is loaded!");
     status=true;
    }