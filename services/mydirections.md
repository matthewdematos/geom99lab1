# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?
origin=place%5Fid%3AChIJaSJBebbL3kcRA3J7ckgsW2Y
&destination=place%5Fid%3AChIJ98CZIJrHh0gRWApM5esemkY
&waypoints=place%5Fid%3AChIJ%5F%2D016KIu30cR%2DRor8MrvVJM
%7Cplace%5Fid%3AChIJm%2Di1NjsRdkgR5eH3xUZIL84
%7Cplace%5Fid%3AChIJQyEWQUTLcEgRhfNd3dejWSk
%7Cplace%5Fid%3AChIJVf133nhie0gRITRAQYTxYaE
&avoid=highways
&departure%5Ftime=now
&traffic%5Fmodel=pessimistic
&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

Copy/paste the JSON results and save them into the empty file ```mydirections.json``` in this repository

## Optional URLs

Read the Rubric to find out about what options exist to earn more marks. Here is where you can provide these additional links to place ids or other items telling a story about your chosen directions API

### Simple option:

Route from origin to destination, including waypoints in order:

https://www.google.com/maps/place/?q=place%5Fid%3AChIJaSJBebbL3kcRA3J7ckgsW2Y

https://www.google.com/maps/place/?q=place%5Fid%3AChIJ%5F%2D016KIu30cR%2DRor8MrvVJM

https://www.google.com/maps/place/?q=place%5Fid%3AChIJm%2Di1NjsRdkgR5eH3xUZIL84

https://www.google.com/maps/place/?q=place%5Fid%3AChIJQyEWQUTLcEgRhfNd3dejWSk

https://www.google.com/maps/place/?q=place%5Fid%3AChIJVf133nhie0gRITRAQYTxYaE

https://www.google.com/maps/place/?q=place%5Fid%3AChIJ%5F%2D016KIu30cR%2DRor8MrvVJM


____
## Rubric

Note: MarkDown (.md) documents are not HTML and therefore are best viewed in the github.com website, not on the pages github.io page. Marking will occur using the github.com source. 

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown and results in the JSON file with a unique origin and destination in directions earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%. Explore the API documentation for parameters we have not used.
4. Tell the story of your route. Include more than 2 "stops", and/or including additional links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
