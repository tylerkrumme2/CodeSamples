

public class PriorityQueueList implements IPriorityQueue{
	private PQListNode first; // first node in the list
	private int size; // current size of the list
	
	public void add(SizedFile file) {
		first = _add(first, file);
		
		size++;
	}
	
	private PQListNode _add(PQListNode currentNode, SizedFile newFile) {
		PQListNode newNode = new PQListNode(newFile);
		PQListNode tempNode;
		if(currentNode == null)
		{
			currentNode = newNode;
		}
		if(currentNode.data.compareTo(newNode.data) < 0) {
			tempNode = currentNode;
			currentNode = newNode;
			newNode.next = tempNode;
		} 
		if(currentNode.data.compareTo(newNode.data) > 0) {
			currentNode.next = _add(currentNode.next, newFile);
		}
		
		return currentNode;
	}

	public void clear() {
		first = null;
		size = 0;
	}

	public boolean contains(SizedFile file) {
		return _contains(first, file);
	}
	
	private boolean _contains(PQListNode current, SizedFile file) {
		if(current == null) {
			return false;
		}
		if(current.data.equals(file)) {
			return true;
		} 
		return _contains(current.next, file);
	}

	public boolean isEmpty() {
		return (size == 0);
	}

	public SizedFile peek() {
		if(this.isEmpty()) {
			return null;
		}
		return first.data;
	}

	public SizedFile remove() {
		PQListNode removedNode;
		removedNode = first;
		first = first.next;
		size--;
		return removedNode.data;
	}

	public int size() {
		return size;
	}

	public SizedFile[] toArray() {
		SizedFile[] listAsArray = new SizedFile[size];
		_toArray(first, listAsArray, 0);
		return listAsArray;
	}
	
	private int _toArray(PQListNode currentNode, SizedFile[] listAsArray, int index) {
		if(currentNode == null) {
			return index;
		}
		listAsArray[index++] = currentNode.data;
		index = _toArray(currentNode.next, listAsArray, index);
		return index;
	}
	
	public String toString() {
		return "[" + _toString(first) + "]";
	}
	
	private String _toString(PQListNode node) {
		String comma = " ";
		if(node == null) {
			return "";
		}
		if(node.next != null) {
			comma = ", ";
		}
		return node.data + comma + _toString(node.next);
	}
	
	public class PQListNode {
		public final SizedFile data;
		public PQListNode next;
		
		public PQListNode(SizedFile file){
			this.data = file;
		}
	}
}
