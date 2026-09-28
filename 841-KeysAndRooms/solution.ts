function canVisitAllRooms(rooms: number[][]): boolean {
  const n = rooms.length;
  const visited = new Set<number>();

  function dfs(room: number) {
    if (visited.has(room)) return;

    visited.add(room);

    for (const key of rooms[room]) {
      dfs(key);
    }
  }

  dfs(0);

  return visited.size === n;
}