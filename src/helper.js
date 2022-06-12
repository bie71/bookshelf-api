/* eslint-disable array-callback-return */
const books = require('./books')

// return name form query
function helper (query) {
  const list = books.filter(nama => {
    const n = new RegExp(query, 'gi')
    const m = n.exec(nama.name)
    if (m !== null) {
      return m.input === nama.name
    }
  })

  return list
}

function filteredReading (query) {
  if (parseInt(query) === 1) {
    return books.filter(read => read.reading === true)
  }
  if (parseInt(query) === 0) {
    return books.filter(read => read.reading === false)
  }
  return books
}

function filteredFinished (query) {
  if (parseInt(query) === 1) {
    return books.filter(finish => finish.finished === true)
  }
  if (parseInt(query) === 0) {
    return books.filter(finish => finish.finished === false)
  }
  return books
}

function responses (h, books, code) {
  if (!books) books = []
  return h.response({
    status: 'success',
    data: {
      books
    }
  }).code(code)
}
module.exports = { helper, filteredReading, filteredFinished, responses }
