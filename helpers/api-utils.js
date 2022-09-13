export async function getAllEvents() {
  const response = await fetch(
    'https://next-practice-f7b95-default-rtdb.firebaseio.com/events.json'
  );
  const data = await response.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}
export async function getFeaturedEvents() {
  const events = await getAllEvents();
  //   console.log(`${events} featured`);
  return events.filter((event) => event.isFeatured);
}
