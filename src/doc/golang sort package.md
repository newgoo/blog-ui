---
title: Golang sort 包源码分析
tags: [Golang,sort,源码]
categories: [Golang,源码]
---

# 1. 排序 `Sort()`
`sort`包提供了一个这样的interface，只要实现这个接口就能对包中`Sort()`函数的的调用
```go
type Interface interface {
	Len() int //切片的长度
	Less(i, j int) bool //比较大小的规则
	Swap(i, j int) //交换规则
}
```
* 在进行排序的过程中，会自动选择排序方式(快排，插入排序，堆排序)
<!--more-->

以下是一个简单的例子
```go
package main

import (
	"fmt"
	"sort"
)

func main() {
	ls := fansLs{&fans{1, "admin", 10}, &fans{2, "demo", 9}, &fans{3, "admin", 9}}
	sort.Sort(ls)
	fmt.Println(ls)
}

type fans struct {
	Id   int64
	Name string
	age  int64
}

type fansLs []*fans

func (f fansLs) Len() int {
	return len(f)
}

func (f fansLs) Less(i, j int) bool {
	if f[i].age < f[j].age {
		return true
	} else if f[i].age > f[j].age {
		return false
	} else {
		return f[i].Id < f[j].Id
	}
}

func (f fansLs) Swap(i, j int) {
	f[i], f[j] = f[j], f[i]
}
```

# 2. `Search()` 函数的使用
* 查找切片中某一个对象所在的索引 ps:这里rs只得是ls这个对象中的的索引
```go
rs := sort.Search(len(ls), func(i int) bool {
    return ls[i].age == 9
})
log.Info(rs)
```

# 3. `Slice()` 函数的使用
* slice函数和sort函数差不多，只需要传入一个`Sort()`接口中的less函数就能实现对排序，排序方式还是和sort相同
ps:`Slice()`和`Sort()`的区别：`Sort()`的定制行更好，`Sort()`仅仅是交换了两个对象
```go
sort.Slice(ls, func(i, j int) bool {
		if ls[i].age < ls[j].age {
			return true
		} else if ls[i].age > ls[j].age {
			return false
		} else {
			return ls[i].Id < ls[j].Id
		}
	})
```

# 4. `Slice()`,`SliceStable()`,`SliceIsSorted()`三个函数
```go
func Slice(slice interface{}, less func(i, j int) bool) {...}
func SliceStable(slice interface{}, less func(i, j int) bool) {...}
func SliceIsSorted(slice interface{}, less func(i, j int) bool) bool {...}
```
* `Slice()`函数已经说明，这里就不赘述了
三个函数参数都是相同，
- `Slice()` 是排序有可能不稳定的;
- `SliceStable()` 是排序有可能不稳定的;
- `SliceIsSorted()` 判断是否是排序后的结果；

