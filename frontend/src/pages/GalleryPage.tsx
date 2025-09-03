import { GalleryImage } from '../types/Gallery';

const GalleryPage = () => {
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      category: 'exterior',
      title: 'Building Exterior',
      description: 'Modern architectural design in downtown Chicago'
    },
    {
      id: 2,
      category: 'lobby',
      title: 'Grand Lobby',
      description: '24/7 concierge and elegant entrance'
    },
    {
      id: 3,
      category: 'amenities',
      title: 'Fitness Center',
      description: 'State-of-the-art equipment with city views'
    },
    {
      id: 6,
      category: 'units',
      title: 'Spacious Living',
      description: 'Open floor plans with floor-to-ceiling windows'
    }
  ];

  // Helper function with proper typing
  const getCategoryGradient = (category: GalleryImage['category']): string => {
    switch (category) {
      case 'exterior':
        return '#ff6b6b, #ee5a52';
      case 'lobby':
        return '#4ecdc4, #44a08d';
      case 'amenities':
        return '#45b7d1, #96c93d';
      case 'units':
        return '#f093fb, #f5576c';
      default:
        return '#667eea, #764ba2';
    }
  };

  return (
    <div className="gallery-page">
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Gallery</h1>
        <p>Explore the luxury and elegance of 740 W Fulton</p>
      </header>

      <div className="gallery-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '25px'
      }}>
        {galleryImages.map((image: GalleryImage) => (
          <div key={image.id} className="gallery-item" style={{
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{
              height: '250px',
              background: `linear-gradient(135deg, ${getCategoryGradient(image.category)})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>
              {image.title}
            </div>
            
            <div style={{ padding: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>
                {image.title}
              </h3>
              <p style={{ margin: 0, color: '#7f8c8d', lineHeight: '1.5' }}>
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section style={{ 
        textAlign: 'center', 
        marginTop: '50px', 
        padding: '30px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '12px' 
      }}>
        <h3>Schedule a Private Tour</h3>
        <p>Experience the luxury firsthand with a personalized showing</p>
        <a href="/contact" style={{
          background: '#27ae60',
          color: 'white',
          padding: '12px 25px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default GalleryPage;