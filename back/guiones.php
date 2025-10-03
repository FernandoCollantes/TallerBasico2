<?php
$producto = [
        "nombre" => "Camiseta Deportiva",
        "stock" => 25,
        "precio" => 19.99,
        "url" => "https://ejemplo.com/camiseta-deportiva"
];
$producto2 = [
        "nombre" => "Camiseta vestir",
        "stock" => 22,
        "precio" => 29.99,
        "url" => "https://ejemplo.com/camiseta-vestir"
];
#para ver en la web el comando del array
var_dump($productos);
?>


<?php

?>



<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ficha de Producto</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>



  <div class="container my-5">
    <div class="card mx-auto" style="max-width: 400px;">
      <div class="card-body">
        <h5 class="card-title"><?php echo $producto["nombre"];?></h5>
        <p class="card-text"><?php echo $producto2["stock"];?></p>
        <p class="card-text"><strong>Precio:</strong><?php echo $producto2["precio"];?></p>
        <a href="https://ejemplo.com/producto" target="_blank" class="btn btn-primary w-100">Ver Producto</a>
      </div>
    </div>
  </div>

    <div class="container my-5">
    <div class="card mx-auto" style="max-width: 400px;">
      <div class="card-body">
        <h5 class="card-title"><?php echo $producto2["nombre"];?></h5>
        <p class="card-text"><?php echo $producto2["stock"];?></p>
        <p class="card-text"><strong><?php echo $producto2["precio"];?></p>
        <a href="https://ejemplo.com/producto" target="_blank" class="btn btn-primary w-100">Ver Producto</a>
      </div>
    </div>
  </div>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
