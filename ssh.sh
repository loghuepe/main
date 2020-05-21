printf "\ny\n\nn\n\n" | ssh-keygen -t rsa -b 2048 -C "email@example.com"

cat ~/.ssh/id_rsa.pub
git remote remove origin

