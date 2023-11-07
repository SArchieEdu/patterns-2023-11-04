function PlayerSkin() {
  const player = usePlayer();
  return (
    <div>
      <button onClick={() => player.play()}>play</button>
    </div>
  );
}
