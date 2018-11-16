// Recursion

fn factorial(value: i64) -> i64 {
    return if value == 1 { value } else { value * factorial(value - 1) };
}

fn main() {
    let a = factorial(3);
    println!("data: {}", a);
}