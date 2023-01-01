interface ListNode {
  val: number;
  next: ListNode | null;
}

function middleNode(head: ListNode | null): ListNode {
  let asArray: ListNode[] = [];
  let node = head;

  while (node) {
    asArray.push(node);
    node = node.next;
  }

  return asArray[Math.floor(asArray.length / 2)];
}

function middleNode1(head: ListNode | null): ListNode | null {
  let middle = head;
  let end = head;

  while (end) {
    if (length % 2 === 0) {
      middle = middle?.next ?? null;
    }

    length++;
    end = end.next;
  }

  return middle;
}
