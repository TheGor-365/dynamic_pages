# frozen_string_literal: true

product = Product.create!([
                            { name: 'iPhone X', description: 'Смартфон Apple', price: 30_000 },
                            { name: 'MacBook Air', description: 'Ноутбук Apple', price: 90_000 },
                            { name: 'iPad Pro', description: 'Планшет Apple', price: 60_000 }
                          ])
puts product
