/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import ClassRoom from './0-classroom';

function initializeRooms() {
  const rooms = [];

  rooms.push(new ClassRoom(19));
  rooms.push(new ClassRoom(20));
  rooms.push(new ClassRoom(34));

  return rooms;
}

export default initializeRooms;
