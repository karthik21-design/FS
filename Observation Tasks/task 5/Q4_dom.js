<!DOCTYPE html>
<html>
<head>
<title>DOM Example</title>
</head>
<body>

<h1 id="heading">Welcome</h1>

<img id="image"
src="https://via.placeholder.com/150">

<br><br>

<button onclick="changeElement()">
Change Content
</button>

<script>

function changeElement(){

    document.getElementById("heading")
    .innerHTML = "DOM Updated Successfully";

    document.getElementById("heading")
    .style.color = "red";

    document.getElementById("image")
    .setAttribute(
        "src",
        "https://via.placeholder.com/250"
    );
}

</script>

</body>
</html>