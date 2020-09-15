import pymongo


def insert_all(produce):
    produce.insert_many(
[
    {
        "type": "apples",
                "cost": .23,
                "stock": 333
    },
    {
        "type": "oranges",
                "cost": .45,
                "stock": 30
    },
    {
        "type": "kiwi",
                "cost": .10,
                "stock": 1000
    },
    {
        "type": "mango",
                "cost": 1.30,
                "stock": 20
    },
    {
        "type": "berries",
                "cost": 2.99,
                "stock": 99
    }
]
    )

print("Data Uploaded!")
