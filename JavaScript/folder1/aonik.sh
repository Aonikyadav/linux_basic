
name="Aakash"
echo "Hello my name is $name"
echo "What is your name"
read your_name
echo "hello Good afternoon $your_name"
echo "today is $(TZ=Asia/kolkata date)"

for i in 1 2 3 4 5 6
do
echo "Number $i"
done

count=1
while [ $count -le 5 ]
do
echo "your count is $count"
count=$((count + 1))
done

score=91
if [ $score -ge 33 ]
then
echo "You will pass"
else
echo "Sorry you will fail"
fi

num=2
for i in {1..10}
do
echo "$num X $i=$((num*i))"
done

