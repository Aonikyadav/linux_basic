name="AONIK"
age=19

echo "my name is $name"
echo "My age is $age"

name="Aonik"
city="Delhi"
color="Blue"
echo "My name is $name, I live in $city, and my favorite color is $color."


for i in 1 2 3 4 5 6 7 8 9
do
echo "tum hariiiiiii $i"
done

count=1
while [ $count -le 5 ]
do
echo "namasteeee"
count=$((count + 1))
done

score=64

if [ "$score" -ge 32 ]
then
    echo "exam gonaaa happen $score"
else
    echo "no exam😶😶😶😶😶 $score"
fi


num=2
for i in {1..10}
do
    echo "$num x $i = $((num * i))"
done
