
  // POST CON SLIDER 

  // Datos de ejemplo
  var blogPosts = [
    {
      titulo: "Diseño de sala de estar",
      imagenes: [
        "/images/2.png",
        "/images/1.png",
        "/images/10.png"
      ],
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at lorem eget eros bibendum suscipit sed at erat. Sed in mauris sit amet turpis tempor tincidunt. Integer euismod, risus id tincidunt facilisis, ipsum sapien feugiat lacus, vel aliquam justo odio vitae massa."
    },
    // Agrega más publicaciones aquí
    {
      titulo: "Decoración de cocina",
      imagenes: [
        "/images/3.png",
        "/images/4.png",
        "/images/5.png"
      ],
      texto: "Vivamus nec dui id metus fermentum posuere. Donec tristique enim id nulla laoreet, vel luctus dui viverra. Fusce eleifend mi ut purus vestibulum, at ullamcorper libero feugiat. Nullam vel malesuada metus, ac fermentum tortor. Ut lacinia consequat lectus in scelerisque."
    },
  
    {
      titulo: "Diseño de sala de estar",
      imagenes: [
        "/images/6.png",
        "/images/7.png",
        "/images/8.png"
      ],
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at lorem eget eros bibendum suscipit sed at erat. Sed in mauris sit amet turpis tempor tincidunt. Integer euismod, risus id tincidunt facilisis, ipsum sapien feugiat lacus, vel aliquam justo odio vitae massa."
    },
  
  
  ];
  
  // Función para generar los elementos HTML de las publicaciones
  function generarPublicaciones() {
    var container = document.getElementById("blog-posts");
  
    // Recorre cada publicación
    for (var i = 0; i < blogPosts.length; i++) {
      var post = blogPosts[i];
  
      // Crea los elementos HTML de la publicación
      var postElement = document.createElement("div");
      postElement.classList.add("blog-post");
  
      var imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
  
      var prevButton = document.createElement("button");
      prevButton.classList.add("prev-button");
      prevButton.textContent = "<";
  
      var nextButton = document.createElement("button");
      nextButton.classList.add("next-button");
      nextButton.textContent = ">";
  
      var imageElement = document.createElement("img");
      imageElement.src = post.imagenes[0];
  
      var titleElement = document.createElement("h2");
      titleElement.textContent = post.titulo;
  
      var textElement = document.createElement("p");
      textElement.textContent = post.texto;
  
      // Agrega los elementos al contenedor
      imageContainer.appendChild(prevButton);
      imageContainer.appendChild(imageElement);
      imageContainer.appendChild(nextButton);
  
      postElement.appendChild(imageContainer);
      postElement.appendChild(titleElement);
      postElement.appendChild(textElement);
  
      container.appendChild(postElement);
  
      // Event listeners para los botones de navegación
      prevButton.addEventListener("click", createChangeImageHandler(-1, post.imagenes, imageElement));
      nextButton.addEventListener("click", createChangeImageHandler(1, post.imagenes, imageElement));
    }
  }
  
  // Función para cambiar la imagen actual
  function createChangeImageHandler(direction, images, imageElement) {
    var currentImageIndex = 0;
    return function() {
      currentImageIndex += direction;
      if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
      } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
      imageElement.src = images[currentImageIndex];
    };
  }
  
  // Genera las publicaciones al cargar la página
  generarPublicaciones();