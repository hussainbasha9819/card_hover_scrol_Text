
const Fetch_data = async () => {
  const _id = document.getElementById("_id")
  const dateAdded = document.getElementById("dateAdded")
  const content = document.getElementById("content")
  const length = document.getElementById("length")
  const author = document.getElementById("author")
  const url = ("https://api.quotable.io/random")
  const response = await fetch(url)
  const data = await response.json()
  console.log(data);
  _id.innerText = data._id
  dateAdded.innerText = data.dateAdded
  content.innerText = data.content
  length.innerText = data.length
  author.innerText = data.author
}
Fetch_data()
