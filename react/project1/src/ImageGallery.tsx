function ImageGallery() {
  return (
    <div>
      <h2>Компонент галереи из картинок</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Плейсхолдер 1" 
        />
        <img 
          src="https://via.placeholder.com/150" 
          alt="Плейсхолдер 2" 
        />
        <img 
          src="https://via.placeholder.com/150" 
          alt="Плейсхолдер 3" 
        />
      </div>
    </div>
  );
}

export default ImageGallery;