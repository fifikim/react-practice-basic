# Task
Create a simple Notification component that is rendered inside of the provided App component.

The App will be passed props that look like this:
```
{
  notification: {
    message: 'Hello World',
    type: 'error'
  }
}
```
The resulting markup will look like this:
```
<div id="app">
    <div class="alert alert-danger">
        Hello World
    </div>
</div>
```
And the rendered output will look like this:
<div id="app">
    <div class="alert alert-danger">
        Hello World
    </div>
</div>
<br/>
To see the rendered output or the resulting markup simply can run the provided test cases. Use Web Preview and the included Bootstrap CSS to visualize your component if you wish.

## Alert Classes
There are four types of notifications that can be used and they each correspond to a specific alert class. These may look familiar as they are the same classes used by Bootstrap:

| type   |  class              |
|--------|---------------------|
|success |	alert alert-success|
|message |	alert alert-info   |
|caution |	alert alert-warning|
|error	 |  alert alert-danger |


## Default Class
If no type is provided in the notification property, then the default class should be ```alert alert-info```.

## No Message Provided
If no message is provided, the notification should not render at all. In which case, the resulting html should be simply:
```
<div id="app">
</div>
```