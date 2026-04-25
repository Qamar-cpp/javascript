
addNumbers :: Int -> Int -> Int
addNumbers x y = x + y


getEvenNumbers :: [Int] -> [Int]
getEvenNumbers list = filter even list

main :: IO ()
main = do
   
    let sum = addNumbers 10 20
    putStrLn ("10 aur 20 ka sum hai: " ++ show sum)
    
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let evens = getEvenNumbers numbers
    putStrLn ("Even numbers ki list: " ++ show evens)