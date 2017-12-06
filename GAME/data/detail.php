<?php
header('content-type:application/json;charset=utf-8');
$gid=$_REQUEST['gid'];
$videoImg=[];
$img=[];
$output=[];
$conn=mysqli_connect('127.0.0.1','root','','degame',3306);
$sql="set names utf8";
mysqli_query($conn,$sql);
$sql="select * from game_video where gid=$gid";
$result=mysqli_query($conn,$sql);
while(($row=mysqli_fetch_assoc($result))!==null){
    $videoImg[]=$row;
}
$output[]=$videoImg;
$sql="select * from game_imgs where gid=$gid";
$result=mysqli_query($conn,$sql);
while(($row=mysqli_fetch_assoc($result))!==null){
    $img[]=$row;
}
$output[]=$img;
echo JSON_encode($output);
?>