while true
do
    mkdir -p ./repos/ && cd repos
    git clone https://gitlab.com/gitlab-org/gitlab-foss.git &
    git clone https://gitlab.com/inkscape/inkscape.git &
    git clone https://gitlab.com/gitlab-org/gitlab.git &
    git clone https://gitlab.com/fdroid/fdroidclient.git &
    git clone https://gitlab.com/gitlab-org/gitlab-runner.git &
    wait
    cd .. && rm -rf ./repos

done
