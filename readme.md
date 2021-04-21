# Open-CU
Open up your clickup ticket from the command-line

### Usage
run `open-cu` in your command-line in your github repo on the appropriately named branch

This tool works by inspecting the name of your current git branch and expects it to follow the format of  
`(something)CU-(ticketId)_(something)`
It will then open up the url of https://app.clickup.com/t/(ticketId)
