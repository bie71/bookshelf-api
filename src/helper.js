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

function filteredObj (prop) {
  const selectedProp = ['id', 'name', 'publisher']
  const arr = []
  prop.forEach(el => {
    const filteredProp = Object.keys(el)
      .filter(key => selectedProp.includes(key))
      .reduce((obj, key) => {
        obj[key] = el[key]
        return obj
      }, {})

    arr.push(filteredProp)
  })
  return arr
}

function responses (h, books, code) {
  if (!books) books = []
  const result = filteredObj(books)
  return h.response({
    status: 'success',
    data: {
      books: result
    }
  }).code(code)
}
module.exports = { helper, filteredReading, filteredFinished, filteredObj, responses }
