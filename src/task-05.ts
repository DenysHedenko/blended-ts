interface InputUser {
    name: string;
    age: number;
}

interface OutputUser {
    name: string;
    age: number;
    isAdmin: boolean;
}


function createUser({ name, age }:InputUser):OutputUser {
    return {
        name,
        age,
        isAdmin: false
    };
}

createUser({ name: "Alice", age: 30 });
