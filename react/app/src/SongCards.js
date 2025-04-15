function SongCard({ title, artists, image, summary, onClick }) {
  return (
    <div className="song_boxed" data-song={title.replace(/\s+/g, '_')} onClick={onClick}>
      <div className="headings">
        <h2 className="song_headings">{title}</h2>
        <h3 className="artists">{artists}</h3>
      </div>
      <img
        src={image}
        className="song_images"
        width="300"
        height="200"
        alt={title}
      />
      <p className="summary">{summary}</p>
    </div>
  );
}

export default SongCard;
