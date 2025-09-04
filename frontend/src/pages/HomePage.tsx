const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>740 West Fulton</h1>
        <h2>Luxury Living in the Heart of Chicago</h2>
        <p>Experience sophisticated urban living in our premium residences</p>
        
        {/* Placeholder for hero image */}
        <img
          src="/images/homepage-photo.jpg"
          alt="740 West Fulton Building"
          style={{
            width: '100%',
            height: '600px',
            objectFit: 'cover',
            borderRadius: '12px',
            margin: '20px 0'
          }}
        />
      </section>

      <section className="highlights">
        <h3>Neighborhood Highlights</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div className="highlight-card">
            <h4>🏙️ Downtown Location</h4>
            <p>Walking distance to Chicago's business district and cultural attractions</p>
          </div>
          <div className="highlight-card">
            <h4>🚇 Transit Access</h4>
            <p>Steps from Union Station and multiple CTA lines</p>
          </div>
          <div className="highlight-card">
            <h4>🍽️ Dining & Entertainment</h4>
            <p>Surrounded by world-class restaurants and nightlife</p>
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', margin: '40px 0' }}>
        <a href="/units" style={{
          background: '#27ae60',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: 'bold'
        }}>
          View Available Units
        </a>
      </section>
    </div>
  );
};

export default HomePage;