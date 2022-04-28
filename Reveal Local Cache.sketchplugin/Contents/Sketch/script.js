var onRun = function(context) {
  const sketch = require('sketch')
  const doc = sketch.getSelectedDocument()
  const fileURL = doc._object.fileURL()
  const task = NSTask.alloc().init()
  task.setLaunchPath("/usr/bin/open")
  task.arguments = ["-R", fileURL]
  task.launch()
}